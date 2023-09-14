import Routeur from "./Routeur";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routeur />
      </AnimatePresence>
    </div>
  );
}

export default App;
