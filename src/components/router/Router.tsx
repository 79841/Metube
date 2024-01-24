import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { Login } from "../auth";
import { GoogleLoginProvider } from "../auth/GoogleLoginProvider";

export const Router = () => {
  return (
    <BrowserRouter>
      <GoogleLoginProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </GoogleLoginProvider>
    </BrowserRouter>
  );
};
