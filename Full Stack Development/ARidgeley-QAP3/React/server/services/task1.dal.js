const db = require("./pgAdmin");

const getRentalInfo = async (body) => {
  let { email } = body;
  DEBUG && console.log("post attempted");
  var sql = `SELECT * FROM public.vw_last12months
    WHERE email = $1 AND category_name != 'Best Actress';`;

  DEBUG && console.log(email);
  var res = await db.query(sql, [email]);

  return res.rows;
};

module.exports = { getRentalInfo };
