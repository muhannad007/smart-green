// import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import World from "./pages/World";
import { useAuthContext } from "./hooks/useAuthContext";
import Profile from "./pages/Profile";
import Containers from "./pages/Containers";
import NavBar from "./components/Navbar";
import Admin from "./manager/Admin";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Dashboard />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
          <Route path="/world" element={user ? <World /> : <Login />} />
          <Route
            path="/profile/:id"
            element={user && <Profile name={user.name} />}
          />
          <Route
            path="/containers"
            element={user ? <Containers /> : <Login />}
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
