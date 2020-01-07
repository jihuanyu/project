/* * @Author: undefined  * @Date: 2019-10-25 11:34:05  * @Last Modified by:   mikey.zhaopeng  * @Last Modified time: 2019-10-25 11:34:05  */
module.exports = (opt, app) => {
    return async function oauth(ctx, next) {
        console.log(ctx, "这是oauth页面");
        if (ctx.session.userinfo === undefined) {
            ctx.status = 401;
            ctx.body = {
                code: 0,
                msg: "没有权限访问"
            };
            return;
        } else if (
            ctx.request.header["authorization"] ===
            ctx.session.userinfo["token"]
        ) {
            await next();
        } else {
            ctx.status = 401;
            ctx.body = {
                code: 0,
                msg: "没有权限访问"
            };
        }
    };
};
