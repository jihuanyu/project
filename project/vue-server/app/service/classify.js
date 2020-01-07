"usr static";

const { Service } = require("egg");

class classService extends Service {
    async left() {
        return this.app.mysql.select("classify");
    }
    async right(ids, page, pageSize) {
        return this.app.mysql.select("product", {
            where: {
                classify_id: ids
            },
            limit: pageSize * 1,
            offset: page * pageSize
        });
    }
}
module.exports = classService;
