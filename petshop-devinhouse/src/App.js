import { ThemeProvider } from "@material-ui/core";
import { useEffect, useState } from "react";
import { NavBar, AddButton, FormDialog } from "./components";
import { OpenForm, OpenProvider, useOpen } from "./contexts";
import { PetsList } from "./pages/PetsList";

function App() {
  return (
    <OpenProvider>
      <ThemeProvider>
        <NavBar />
        <PetsList />
        <AddButton />
        <FormDialog />
      </ThemeProvider>
    </OpenProvider>
  );
}

export default App;
