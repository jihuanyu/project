"use strict";
const Service = require("egg").Service;
class CarService extends Service {
    //根据用户id和商品id，查询当前用户是否在购物车中加入该商品
    async user_id(iphone) {
        const $sql = `select * from shopcar where user_id =?`;
        const user = await this.app.mysql.query($sql, [iphone]);
        return user;
    }
    async shoplist(products) {
        const list = await this.app.mysql.select("product", {
            where: {
                id: products
            }
        });
        return list;
    }
    // 插入一条数据到购物车
    async add(params) {
        console.log(params);
        const $sql = `INSERT INTO shopcar (product_id,num,user_id,active) VALUES (?,?,?,?);`;
        const item = await this.app.mysql.query($sql, params);
        return item;
    }
    // async insertCar(id, productId, num) {
    //     const list = await this.app.mysql.insert("shopcar", {
    //         productId,
    //         num,
    //         userId: id,
    //         active: 0
    //     });
    //     return list;
    // }
    // // 更新某一条数据的字段
    // async updataCar({ id, ...rest }) {
    //     await this.app.mysql.update("shopcar", {
    //         id,
    //         ...rest
    //     });
    // }
    // // 添加到购物车
    // async add(id, productId, num) {
    //     const productItem = await this.getCarItem(id, productId);
    //     if (productItem) {
    //         await this.updataCar({
    //             id: productItem.id,
    //             num: productItem.num + num
    //         });
    //     } else {
    //         await this.insertCar(id, productId, num);
    //     }
    // }
    // async delete(id) {
    //     const sql = `delete from shopcar where id=${id}`;
    //     return await this.app.mysql.query(sql);
    // }
    // async addNum(id, num) {
    //     await this.updataCar({
    //         id,
    //         num: num * 1 + 1
    //     });
    // }
}
module.exports = CarService;
