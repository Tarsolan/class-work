const db = require("./pgAdmin");

const getOverdueFilms = async (username) => {
  DEBUG && console.log("post attempted");
  var sql = `SELECT name, customer_email, rental_date, title, staff_name, city, category_name, rental_id FROM public."vw_overdueFilmByStore"
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

  var res = await db.query(memberQuery);
  let verified = false;

  try {
    if (password === res.rows[0].password) {
      DEBUG && console.log("Password verified.");
      verified = true;
    } else {
      DEBUG && console.log("Invalid password.");
      return JSON.stringify("invalid");
    }
  } catch (error) {
    return JSON.stringify("noUser");
  }

  if (verified) {
    var overDueFilms = await getOverdueFilms(username);
    DEBUG && console.log(overDueFilms);

    return overDueFilms;
  }
};

module.exports = { getOverdueFilms, verifyPassword };
