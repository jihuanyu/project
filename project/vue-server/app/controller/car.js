"use strict";
const Controller = require("egg").Controller;

class CarController extends Controller {
    //查询
    async shoplist() {
        const { ctx } = this;
        const iphone = ctx.session.iphone;
        const data = await ctx.service.car.user_id(iphone);
        var product = [];
        data.forEach(item => {
            product.push(item.product_id);
        });
        const result = await ctx.service.car.shoplist(product);
        ctx.body = {
            code: 1,
            result,
            data
        };
    }
    // 增加
    async add() {
        const { ctx } = this;
        const iphone = ctx.session.iphone;
        const { product_id, num, active } = ctx.request.body;
        const params = [product_id, num, iphone, active];
        const result = await ctx.service.car.add(params);
        console.log(result);
        ctx.body = {
            code: 1,
            message: "添加成功"
        };
    }
    //删除
    // async delete() {
    //     const { ctx } = this;
    //     const { id } = ctx.request.body;
    //     await ctx.service.car.delete(id);
    //     ctx.body = {
    //         code: 1,
    //         message: "删除成功"
    //     };
    // }
    // // num的增加
    // async addNum() {
    //     const { ctx } = this;
    //     const { id, num } = ctx.request.body;
    //     await ctx.service.car.addNum(id, num);
    //     ctx.body = {
    //         code: 1,
    //         message: "增加成功"
    //     };
    // }
}
module.exports = CarController;
