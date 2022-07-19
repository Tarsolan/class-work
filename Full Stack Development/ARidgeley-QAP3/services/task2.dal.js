const db = require("./pgAdmin");

const getOverdueFilms = async (body) => {
  let { username } = body;
  DEBUG && console.log("post attempted");
  var sql = `SELECT name, customer_email, rental_date, title, staff_name, city, category_name FROM public."vw_overdueFilmByStore"
WHERE username = '${username}'`;

  var res = await db.query(sql);

  return res.rows;
};

const verifyPassword = async (body) => {
  const { username, password } = body;
  DEBUG && console.log(username);
  DEBUG && console.log(password);
  let memberQuery = `SELECT password FROM staff
  WHERE username = '${username}'`;

  const res = await db.query(memberQuery);

  try {
    if (password === res.rows[0].password) {
      DEBUG && console.log("Password verified.");
      return 0;
    } else {
      DEBUG && console.log("Invalid password.");
      return 1;
    }
  } catch (error) {
    return 2;
  }
};

module.exports = { getOverdueFilms, verifyPassword };
