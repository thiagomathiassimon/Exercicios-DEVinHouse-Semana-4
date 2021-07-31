import { render, screen } from "@testing-library/react";
import { AddButton } from "./AddButton";

const renderComponent = () => render(<AddButton />);

describe("AddButton Component", () => {
  it("Deve renderizar o botão de adição de itens", () => {
    renderComponent();

    expect(screen.getByTestId("addButton")).toBeInTheDocument();
  });
});
