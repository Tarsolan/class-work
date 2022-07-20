const db = require("./pgAdmin");

const getBranchNames = async () => {
  let sql = `SELECT city AS branch, store_id AS branch_id FROM store
  JOIN address USING (address_id)
  JOIN city USING (city_id);`;

  var res = await db.query(sql);
  return res.rows;
};

const getTop10Films = async () => {
  let sql = `SELECT * FROM public.vw_top_10_movies_per_store`;

  var res = await db.query(sql);
  return res.rows;
};

const getTop10FilmsByBranch = async (id) => {
  let sql = `SELECT * FROM public.vw_top_10_movies_per_store
    WHERE branch_id=$1`;

  var res = await db.query(sql, [id]);
  return res.rows;
};

module.exports = { getTop10Films, getTop10FilmsByBranch, getBranchNames };
