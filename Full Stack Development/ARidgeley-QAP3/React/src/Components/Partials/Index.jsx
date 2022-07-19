import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <h2>Choose a task:</h2>
      <ul>
        <li>
          <Link to="/task1">
            Task 1 - As a customer of dvdrental I would like to have a web page
            so I can view the films I have rented in the last 12 months.
          </Link>
        </li>
        <li>
          <Link to="/task2">
            Task 2 - As a store manager at dvdrental I would like to have a web
            page so I can view the films that have not been returned and the
            customer who rented the film.
          </Link>
        </li>
        <li>
          <Link to="/task3">
            Task 3 - As the owner of dvdrental I would like to have a web page
            so I can view the top ten rental films by rental dollars earned for
            a particular store.
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
