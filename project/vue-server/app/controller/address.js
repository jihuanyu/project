"use strict";

const Controller = require("egg").Controller;

class addressController extends Controller {
    async index() {
        const result = await this.ctx.service.address.index();
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
    async edit() {
        const params = this.ctx.request.body;
        const result = await this.ctx.service.address.edit(params);
        if (result.affectedRows && result.affectedRows > 0) {
            this.ctx.body = {
                code: 1
            };
        }
    }
    async create() {
        const params = this.ctx.request.body;
        const result = await this.ctx.service.address.create(params);
        if (result.affectedRows && result.affectedRows > 0) {
            this.ctx.body = {
                code: 1,
                msg: "插入成功"
            };
        } else {
            this.ctx.body = {
                code: 0,
                msg: "插入失败！"
            };
        }
    }

    async destroy() {
        const result = await this.ctx.service.address.destroy(
            this.ctx.request.body
        );
        if (result.affectedRows > 0) {
            this.ctx.body = {
                code: 1
            };
        } else {
            this.ctx.body = {
                code: 0
            };
        }
    }
}

module.exports = addressController;
