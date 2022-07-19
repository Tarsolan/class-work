import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Full-Stack QAP 3 - React</h1>
      <ul>
        <li>
          <Link to="/">[Home]</Link>
        </li>
        <li>
          <Link to="/task1">[Task 1]</Link>
        </li>
        <li>
          <Link to="/task2">[Task 2]</Link>
        </li>
        <li>
          <Link to="/task3">[Task 3]</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
