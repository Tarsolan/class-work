const db = require("./pgAdmin");

const getTop10Films = async () => {
  let sql = `SELECT * FROM public.vw_top_10_movies_per_store`;

  var res = await db.query(sql);
  return res.rows;
};

const getTop10FilmsByBranch = async (name) => {
  let sql = `SELECT * FROM public.vw_top_10_movies_per_store
    WHERE branch=$1`;

  var res = await db.query(sql, [name]);
  return res.rows;
};

module.exports = { getTop10Films, getTop10FilmsByBranch };
