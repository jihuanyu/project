

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    const result = await this.app.mysql.select('interview');
    return result;
  }

  async index1() {
    const result = await this.app.mysql.select('interviewtype');
    return result;
  }

  async show(number){
    const result = await this.app.mysql.query(`select * from interview where type = ${number}`)
    return result;
  }

  async showDetail(id){
    const result = await this.app.mysql.query(`select * from interview where id = ${id}`)
    return result;
  }

  async addInterview(title,type,details,username){
    const result = await this.app.mysql.insert('exam',{title,type,details,username})
    return result
  }
  
}

module.exports = HomeService
;
