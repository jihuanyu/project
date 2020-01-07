"use strict";

const { Service } = require("egg");

class tablistService extends Service {
    async partab() {
        const $sql = `select * from home_classify`;
        const result = this.app.mysql.query($sql, []);
        return result;
    }
    async productesId(id) {
        const res = await this.app.mysql.get("home_classify", { id });
        return res;
    }
    async clditem(params = {}) {
        let productID = await this.productesId(params.type);
        const result = await this.app.mysql.select("product", {
            where: {
                id: productID.products.split(",")
            },
            limit: params.pageSize * 1,
            page: params.page * params.pageSize
        });
        return result;
    }
}

module.exports = tablistService;
