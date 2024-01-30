import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { Login } from "../auth";
import { GoogleLoginProvider } from "../auth/GoogleLoginProvider";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../common/error/ErrorFallback";
import { TanstackProvider } from "../common/tanstack";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

export const Router = () => {
  return (
    <BrowserRouter>
      {/* <ErrorBoundary
        fallbackRender={(fallbackProps) => <ErrorFallback {...fallbackProps} />}
      > */}
      <TanstackProvider>
        {/* <GoogleLoginProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* </GoogleLoginProvider> */}
      </TanstackProvider>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
};
