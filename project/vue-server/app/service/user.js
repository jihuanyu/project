"use strict";

const { Service } = require("egg");

class userService extends Service {
    //注册
    async register(params) {
        const { iphone } = params;
        const $sql = `insert into user (iphone) values (?)`;
        const $params = [iphone];
        const result = this.app.mysql.query($sql, $params);
        return result;
    }
    //登陆
    async login(params) {
        const { iphone } = params;
        const $sql = `select * from user where iphone=?`;
        const $params = [iphone];
        const result = this.app.mysql.query($sql, $params);
        return result;
    }
}

module.exports = userService;
