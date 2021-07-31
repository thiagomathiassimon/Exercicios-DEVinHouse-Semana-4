import { render, screen } from "@testing-library/react";

import { NavBar } from "./NavBar";

const renderComponent = () => render(<NavBar />);

describe("NavBar Component", () => {
  it("Deve renderizar o texto da NavBar", () => {
    renderComponent();

    expect(screen.getByText("PetShop - DEVinHouse")).toBeInTheDocument();
  });
  it("Deve renderizar o IconButton de menu na NavBar", () => {
    renderComponent();

    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });
});
