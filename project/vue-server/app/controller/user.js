const { Controller } = require("egg");
const md5 = require("md5");

const randomCode = () => {
    var code = "";
    for (let i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
};

class UserControll extends Controller {
    async send_code() {
        const { ctx } = this;
        const params = this.ctx.request.body;
        const code = randomCode();
        const iphone = params.iphone;
        ctx.session.msg_code = code;
        ctx.session.iphone = iphone;
        ctx.session.maxAge = 1000 * 60 * 10;
        ctx.body = {
            code: 1,
            msg: `验证码[${code}]已发送至${iphone}`
        };
    }
    async login() {
        const params = this.ctx.request.body;
        const login = await this.ctx.service.user.login(params);
        if (login.length <= 0) {
            const register = await this.ctx.service.user.register(params);
            const token = md5(
                JSON.stringify({
                    header: {
                        alg: "md5",
                        typ: "jwt"
                    }
                })
            );
            //在服务器端缓存token
            this.ctx.session.info = {
                token
            };

            //响应给前端
            this.ctx.body = {
                code: 1,
                msg: "注册并登陆成功",
                token
            };
        } else {
            if (params.iphone.length != 11 || params.code.length != 4) {
                this.ctx.body = {
                    code: 0,
                    msg: "请输入正确的手机号"
                };
            } else if (
                params.code != this.ctx.session.msg_code ||
                params.code.length != 4
            ) {
                this.ctx.body = {
                    code: 0,
                    msg: "验证码输入错误"
                };
            } else if (this.ctx.session.msg_code == "") {
                this.ctx.body = {
                    code: 0,
                    msg: "验证码失效"
                };
            } else if (
                params.iphone == this.ctx.session.iphone &&
                params.code == this.ctx.session.msg_code
            ) {
                const token = md5(
                    JSON.stringify({
                        header: {
                            alg: "md5",
                            typ: "jwt"
                        }
                    })
                );
                //在服务器端缓存token
                this.ctx.session.userinfo = {
                    token
                };

                //响应给前端
                this.ctx.body = {
                    code: 1,
                    msg: "登陆成功",
                    token
                };
            } else {
                this.ctx.body = {
                    code: 0,
                    msg: "验证码已过期"
                };
            }
        }
    }
}

module.exports = UserControll;
