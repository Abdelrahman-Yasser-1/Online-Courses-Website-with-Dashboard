// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// Components
import Dashboard from "./components/Dashboard/Dashboard";
import CoursesProvider from "./components/store/CoursesProvider";
import HomePage from "./components/Pages/HomePage";

// Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <CoursesProvider>
                <Dashboard />
              </CoursesProvider>
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
