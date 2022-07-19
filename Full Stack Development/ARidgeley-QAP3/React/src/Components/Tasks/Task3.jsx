import React from "react";

const Task3 = ({ branches, films, getFilms }) => {
  const branchOptions = () => {
    return (
      <>
        {branches.map((branch) => {
          return <option key={branch.store_id}>{branch.branch}</option>;
        })}
      </>
    );
  };

  //   const selectBranch = async (branch) => {
  //     getFilms(branch);
  //   };

  return (
    <div>
      <h2>Task 3</h2>
      <form method="get">
        <div className="form-group">
          <div className="form-group col-md-4">
            <label htmlFor="branchLocation">Select Store Location</label>
            <select
              id="inputStore"
              className="form-control"
              onChange={(e) => {
                getFilms(e.target.value);
              }}
            >
              <option disabled default>
                Store location
              </option>
              {branches && branchOptions()}
            </select>
          </div>
        </div>
      </form>

      {films ? (
        <div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <h3>{films[0].branch} Branch</h3>
            <small>Top 10 movies by amount earned</small>
          </div>

          <br />
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Movie Name</th>
                <th scope="col">Film Description</th>
                <th scope="col">Category</th>
                <th scope="col">Income</th>
              </tr>
            </thead>
            <tbody>
              {/* <% var formatter = new Intl.NumberFormat('en-US',{ style: 'currency',
        currency: 'USD' }); locals.top10Films.forEach((film) => { %> */}
              {films.map((film) => {
                var formatter = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                });
                return (
                  <tr key={film.film_id}>
                    <td>
                      <strong>{film.title}</strong>
                    </td>
                    <td>{film.description}</td>
                    <td>{film.category_name}</td>
                    <td>{formatter.format(film.income)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Task3;
