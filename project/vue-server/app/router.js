"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get("/getCarousel", controller.home.carousel); //获取轮播图

    router.post("/login", controller.user.login); //登陆
    router.post("/send_code", controller.user.send_code); //发送验证码

    router.get("/navlist", controller.home.navlist); //导航
    router.get("/navbetter", controller.home.navbetter); //大图导航
    router.resources("/posts", "/api/address", controller.address); //查看地址

    router.get("/partab", controller.tablist.partab); //首页tab切换
    router.get("/clditem", controller.tablist.clditem);

    router.get("/classifytab", controller.classify.left); //分类
    router.get("/classifyitem", controller.classify.right);

    router.get("/shopcar", controller.car.shoplist);
    router.post("/shopcar/add", controller.car.add);
    // router.post("/car/delete", controller.car.delete);
    // router.post("/car/addNum", controller.car.addNum);
};
