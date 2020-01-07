"use strict";
const Controller = require("egg").Controller;
const path = require("path");
const fs = require("fs");
class RenderController extends Controller {
    //用读取文件的形式来读取内容
    async render() {
        const { ctx } = this;
        const tpl = path.join(
            this.app.config.baseDir,
            "app/public/dist/index.html"
        );
        const html = await fs.readFileSync(tpl, "utf-8");
        ctx.body = html;
    }
}
module.exports = RenderController;
