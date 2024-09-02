import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Layout from "./Layout";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import MyAccount from "./pages/MyAccount";
import PropertyPage from "./pages/PropertyPage";
import MyBookings from "./pages/MyBookings";
import PropertyForm from "./pages/PropertyForm";
import PropertyDetail from "./pages/PropertyDetail";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myaccount" element={<MyAccount />}></Route>
          <Route path="/myaccount/mybookings" element={<MyBookings />}></Route>
          <Route
            path="/myaccount/myproperties"
            element={<PropertyPage />}
          ></Route>
          <Route
            path="/myaccount/myproperties/addnew"
            element={<PropertyForm />}
          />
          <Route
            path="/myaccount/myproperties/:id"
            element={<PropertyForm />}
          />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
