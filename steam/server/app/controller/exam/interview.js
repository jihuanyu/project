/*
 * @Func 面试题相关的控制器
 */
const Controller = require("egg").Controller;

class Exam extends Controller {
  /**
   * 添加面试题
   * /Interview/exam
   * POST
   *
   */
  async create() {
    const { ctx } = this;
    const { title, type, details, username } = ctx.request.body;
    const result = await this.ctx.service.exam.home.addInterview(
      title,
      type,
      details,
      username
    );

    ctx.body = {
      code: 1,
      msg: "面试题添加成功"
    };
  }
  /**
   * 更新面试题
   * /Interview/exam/update
   * PUT
   */
  async update() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: "面试题更新成功"
    };
  }
  /**
   * 获取所有面试题
   * /Interview/exam/new
   * GET
   */
  async new() {
    const { ctx } = this;
    const result = await this.ctx.service.exam.home.index();
    const result1 = await this.ctx.service.exam.home.index1();
    ctx.body = {
      code: 1,
      result,
      result1,
      msg: "所有面试题获取成功"
    };
  }
  /**
   * 按条件获取面试题
   * /Interview/exam/:id
   * /Interview/exam/condition
   * GET
   * 参数待定
   * */

  async show() {
    const { ctx } = this;
    if (ctx.query.number) {
      const { number } = ctx.query;
      const result = await this.ctx.service.exam.home.show(number);
      ctx.body = {
        code: 1,
        result,
        msg: "面试题获取成功"
      };
    } else {
      const { id } = ctx.query;
      const result = await this.ctx.service.exam.home.showDetail(id);
      ctx.body = {
        code: 1,
        result,
        msg: "面试题获取成功"
      };
    }
  }
}
module.exports = Exam;
