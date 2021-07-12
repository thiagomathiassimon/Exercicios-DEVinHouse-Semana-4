import { ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components";
import { PetsList } from "./pages/PetsList";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <PetsList />
      </ThemeProvider>
    </>
  );
}

export default App;
