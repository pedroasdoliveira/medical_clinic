/* eslint-disable react-refresh/only-export-components */
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export enum PathRoutes {
  LOGIN = "/",
  REGISTER = "/cadastrar",
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PathRoutes.LOGIN} element={<Login />} />
      <Route path={PathRoutes.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
