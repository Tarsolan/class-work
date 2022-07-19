import React from "react";
import { useState } from "react";

const Task2 = ({ getOverdueFilms, films }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { username: username, password: password };

    getOverdueFilms(user);
  };

  return (
    <div>
      <h2>Task 2</h2>
      <form method="post" onSubmit={onSubmit}>
        <div className="form-group col-md-4">
          <label htmlFor="exampleInputUser1">Employee Username</label>
          <input
            type="username"
            className="form-control"
            id="exampleInputUser1"
            placeholder="Enter employee username"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <br />
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <small>
            Password (for testing purposes):
            8cb2237d0679ca88db6464eac60da96345513964
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {films ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>Displaying unreturned movies for {films[0].city} branch</h3>
            <small>Manager Name: {films[0].staff_name}</small>
          </div>
          <br />
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Movie Name</th>
                <th scope="col">Date Rented</th>
                <th scope="col">Rented By</th>
                <th scope="col">Customer Email</th>
              </tr>
            </thead>
            <tbody>
              {films.map((film) => {
                var rentDate = new Date(film.rental_date);
                return (
                  <tr key={film.rental_id}>
                    <td>
                      <strong>{film.title}</strong>
                    </td>
                    <td>{rentDate.toLocaleDateString()}</td>
                    <td>{film.name}</td>
                    <td>{film.customer_email}</td>
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

export default Task2;
