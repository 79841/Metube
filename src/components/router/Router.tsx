import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../auth";
import { TanstackProvider } from "../common/tanstack";
import { Home } from "../home";

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
