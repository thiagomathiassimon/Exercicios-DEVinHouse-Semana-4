import { ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components";
import { OpenProvider } from "./contexts";
import { PetsList } from "./pages/PetsList";

function App() {
  return (
    <OpenProvider>
      <ThemeProvider>
        <NavBar />
        <PetsList />
      </ThemeProvider>
    </OpenProvider>
  );
}

export default App;
