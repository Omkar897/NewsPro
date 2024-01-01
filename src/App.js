import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="in"
                category="General"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={6}
                country="in"
                category="Business"
              />
            }
          ></Route>
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="in"
                category="General"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={6}
                country="in"
                category="Entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={6}
                country="in"
                category="Health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={6}
                country="in"
                category="Science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={6}
                country="in"
                category="Sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={6}
                country="in"
                category="Technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
