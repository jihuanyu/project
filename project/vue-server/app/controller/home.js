"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
    async carousel() {
        const { ctx } = this;
        const result = await ctx.service.home.carousel();
        if (result) {
            ctx.body = {
                code: 1,
                msg: "获取成功",
                result
            };
        } else {
            ctx.body = {
                code: 0,
                msg: "获取失败",
                result: []
            };
        }
    }
    async navlist() {
        const { ctx } = this;
        const result = await ctx.service.home.navlist();
        if (result) {
            ctx.body = {
                code: 1,
                msg: "获取成功",
                result
            };
        } else {
            ctx.body = {
                code: 0,
                msg: "获取失败",
                result: []
            };
        }
    }
    async navbetter() {
        const { ctx } = this;
        const result = await ctx.service.home.navbetter();
        if (result) {
            ctx.body = {
                code: 1,
                msg: "获取成功",
                result
            };
        } else {
            ctx.body = {
                code: 0,
                msg: "获取失败",
                result: []
            };
        }
    }
}
module.exports = HomeController;
