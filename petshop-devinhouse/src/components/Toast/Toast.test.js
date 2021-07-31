import { render, screen } from "@testing-library/react";
import { Toast } from "./Toast";

const renderComponent = () => render(<Toast open={true} />);

describe("Toast Component", () => {
  it("Deve renderizar o Toast", () => {
    renderComponent();

    expect(screen.getByTestId("toast")).toBeInTheDocument();
  });
});
