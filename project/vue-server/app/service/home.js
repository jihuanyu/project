"use strict";

const { Service } = require("egg");
class homeService extends Service {
    //轮播图接口
    async carousel() {
        const $sql = `select * from carousel`;
        const result = this.app.mysql.query($sql, []);
        return result;
    }
    //十个图片导航
    async navlist() {
        const $sql = `select * from nav`;
        const result = this.app.mysql.query($sql, []);
        return result;
    }
    //三个图片导航
    async navbetter() {
        const $sql = `select * from navbetter`;
        const result = this.app.mysql.query($sql, []);
        return result;
    }
}
module.exports = homeService;
