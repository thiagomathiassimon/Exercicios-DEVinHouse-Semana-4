import { ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components";
import { OpenProvider } from "./contexts";
import { PetsList } from "./pages/PetsList";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <OpenProvider>
        <PetsList />
      </OpenProvider>
    </ThemeProvider>
  );
}

export default App;
