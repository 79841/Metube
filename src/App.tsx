import { TanstackProvider } from "./components/common/tanstack";
import { Router } from "./components/router";

function App() {
  return (
    <TanstackProvider>
      <Router />
    </TanstackProvider>
  );
}

export default App;
