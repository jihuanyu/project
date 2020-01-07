"use strict";

const { Controller } = require("egg");

class tablistController extends Controller {
    async partab() {
        const result = await this.ctx.service.tablist.partab();
        if (result.length) {
            this.status = 200;
            this.ctx.body = {
                code: 1,
                result
            };
        } else {
            this.status = 500;
            this.ctx.body = {
                code: 0,
                msg: "暂无数据"
            };
        }
    }
    async clditem() {
        const { type, page, pageSize } = this.ctx.request.query;
        const params = { type, page, pageSize };
        const result = await this.ctx.service.tablist.clditem(params);
        if (result.length) {
            this.status = 200;
            this.ctx.body = {
                code: 1,
                result
            };
        } else {
            this.status = 500;
            this.ctx.body = {
                code: 0,
                msg: "暂无数据"
            };
        }
    }
}

module.exports = tablistController;
