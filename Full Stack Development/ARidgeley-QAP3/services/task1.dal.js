const db = require("./pgAdmin");

const getRentalInfo = async (body) => {
  let { email } = body;
  DEBUG && console.log("post attempted");
  var sql = `SELECT * FROM public.vw_last12months
    WHERE email = '${email}' AND rental_date > (CURRENT_DATE - '1 year'::interval);`;

  DEBUG && console.log(email);
  var res = await db.query(sql);

  return res.rows;
};

module.exports = { getRentalInfo };
