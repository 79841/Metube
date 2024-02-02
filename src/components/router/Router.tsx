import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "components/auth";
import { TanstackProvider } from "components/common/tanstack";
import { Home } from "components/home";

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
