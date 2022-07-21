import "./App.css";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Partials/Nav";
import Footer from "./Components/Partials/Footer";
import Index from "./Components/Partials/Index";
import Task1 from "./Components/Tasks/Task1";
import Task2 from "./Components/Tasks/Task2";
import Task3 from "./Components/Tasks/Task3";
import useFetch from "./Hooks/useFetch";

function App() {
  const [branches] = useFetch("http://localhost:3001/task3/branches");
  const [films, setFilms] = useState(false);
  const [overdueFilms, setOverdueFilms] = useState(false);
  const [top10Films, setTop10Films] = useState(false);

  // General Use
  const infoToast = (message, type = "info") => {
    if (type === "info") {
      toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } else if (type === "error") {
      toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } else if (type === "success") {
      toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    }
  };

  // Task 1
  const getFilms = async (email) => {
    const res = await fetch("http://localhost:3001/task1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    const data = await res.json();
    try {
      var firstName = data[0].name;
    } catch (error) {
      infoToast("Invalid email address. Please try again.", "error");
    }

    if (firstName) {
      setFilms(data);
    }
  };

  // Task 2

  const getOverdueFilms = async (user) => {
    const res = await fetch("http://localhost:3001/task2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    // Depending on the username/password combination, this fetch will return different things
    verifyData(data);
  };

  const verifyData = (data) => {
    switch (data) {
      case "noUser":
        infoToast("That username does not exist. Please try again.", "error");
        setOverdueFilms(false);
        return false;
      case "invalid":
        infoToast("Invalid password. Please try again.", "error");
        setOverdueFilms(false);
        return false;
      default:
        setOverdueFilms(data);
        break;
    }
  };

  // Task 3

  const getTop10 = async (branch) => {
    var res = await fetch(`http://localhost:3001/task3/${branch}`);

    const data = await res.json();
    setTop10Films(data);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <hr />
        <main>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/task1"
              element={
                <Task1 toast={infoToast} getFilms={getFilms} films={films} />
              }
            />
            <Route
              path="/task2"
              element={
                <Task2
                  toast={infoToast}
                  getOverdueFilms={getOverdueFilms}
                  films={overdueFilms}
                />
              }
            />
            <Route
              path="/task3"
              element={
                <Task3
                  toast={infoToast}
                  branches={branches}
                  getFilms={getTop10}
                  films={top10Films}
                />
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
