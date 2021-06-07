var request = require("request");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async line(ctx) {
    var token = `VjCC1gAJfClc91mkbI15IAjtPzaot4n24L8eqgwiWAb`;

    const { id } = ctx.params;
    console.log(id);
    // console.log(ctx.req);
    if (id) {
      var message = `โรงเรียน${id} แจ้งซ่อมใหม่ในระบบ`;
      console.log(message);
      request(
        {
          method: "POST",
          uri: "https://notify-api.line.me/api/notify",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            bearer: token,
          },
          form: {
            message: message,
          },
        },
        (err, httpResponse, body) => {
          if (err) {
            console.log(err);
          } else {
            return { message: "a" };
          }
        }
      );
    }
  },
  async findme(ctx) {
    console.log("a");
  },
};
