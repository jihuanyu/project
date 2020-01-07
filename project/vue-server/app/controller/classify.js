"use static";

const { Controller } = require("egg");
//生成json结构得数据
function arrayToTree(data, parentkey) {
    let dataJson = {};
    let newData = [];
    data.forEach(item => {
        dataJson[item.id] = item;
    });
    data.forEach(item => {
        if (item[parentkey] === 0) {
            newData.push(item);
        } else {
            const parent = dataJson[item[parentkey]];
            if (parent.children) {
                parent.children.push(item);
            } else {
                parent.children = [item];
            }
        }
    });
    return newData;
}
//type类型id,data类型树状数据
function getProducts(data, type, has = false) {
    let ids = [];
    if (!data) return [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.id === type * 1) {
            if (item.children) {
                ids = ids.concat(getProducts(item.children, type * 1, true));
            } else {
                ids.push(item.id);
            }
            break;
        } else {
            if (has && !item.children) {
                ids.push(item.id);
            } else if (has && item.children) {
                ids = ids.concat(getProducts(item.children, type * 1, true));
            } else {
                ids = ids.concat(getProducts(item.children, type * 1, false));
            }
        }
    }
    return ids;
}
class classController extends Controller {
    async left() {
        const { ctx } = this;
        const result = await ctx.service.classify.left();
        const data = arrayToTree(result, "parent_id");
        if (data) {
            ctx.body = {
                code: 1,
                msg: "获取成功",
                data
            };
        } else {
            ctx.body = {
                code: 0,
                msg: "获取失败",
                data: []
            };
        }
    }
    async right() {
        const { ctx } = this;
        const { type, page, pageSize } = ctx.request.query;
        const result = await ctx.service.classify.left();
        const ids = getProducts(arrayToTree(result, "parent_id"), type);
        const data = await ctx.service.classify.right(ids, page, pageSize);
        if (data) {
            ctx.body = {
                code: 1,
                msg: "获取成功",
                data
            };
        } else {
            ctx.body = {
                code: 0,
                msg: "获取失败",
                data: []
            };
        }
    }
}

module.exports = classController;
