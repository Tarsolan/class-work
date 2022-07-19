import React from "react";
import { useState } from "react";

const Task1 = ({ getFilms, films }) => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    getFilms(email);
  };

  return (
    <div>
      <h2>Task 1</h2>
      <form method="post" onSubmit={onSubmit}>
        <div className="form-group col-md-4">
          <label htmlFor="exampleInputEmail1">Customer Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit!
        </button>
      </form>

      {films ? (
        <div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <h3>Displaying Rental Info for {films[0].name}</h3>
            <small>Date Range: Last 12 months</small>
          </div>
          <br />
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rental Date</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {films.map((film) => {
                var rentDate = new Date(film.rental_date);
                return (
                  <tr key={film.rental_id}>
                    <td>{rentDate.toLocaleDateString()}</td>
                    <td>
                      <strong>{film.title}</strong>
                    </td>
                    <td>{film.category_name}</td>
                    <td>{film.description}</td>
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

export default Task1;
