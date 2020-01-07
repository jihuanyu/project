"use strict";

const { Service } = require("egg");

class addressService extends Service {
    async index() {
        return this.app.mysql.query("select * from address");
    }
    async edit(params) {
        const { man, iphone, address, detailaddress } = params;
        const $sql = `update address set man=?,iphone=?,address=?,detailaddress=? where id=?`;
        const $params = [man, iphone, address, detailaddress, id];
        return this.app.mysql.query($sql, $params);
    }

    async create({ man, iphone, address, detailaddress }) {
        const $sql =
            "insert into address (man,iphone,address,detailaddress) values (?,?,?,?)";
        const $params = [man, iphone, address, detailaddress];
        return this.app.mysql.query($sql, $params);
    }
    async destroy({ id }) {
        const $sql = `delete from address where id = ?`;
        return this.app.mysql.query($sql, [id]);
    }
}

module.exports = addressService;
