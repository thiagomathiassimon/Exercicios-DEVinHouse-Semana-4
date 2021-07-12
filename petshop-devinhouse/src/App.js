import { ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components";
import { AddButton } from "./components";
import { PetsList } from "./pages/PetsList";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <PetsList />
        <AddButton/>
      </ThemeProvider>
    </>
  );
}

export default App;
