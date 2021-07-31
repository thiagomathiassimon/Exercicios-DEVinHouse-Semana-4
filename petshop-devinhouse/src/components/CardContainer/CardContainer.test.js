import { render, screen } from "@testing-library/react";
import { CardContainer } from "./CardContainer";

const renderComponent = () => render(<CardContainer />);

describe("CardContainer Component", () => {
  it("Deve renderizar o CardConteiner", () => {
    renderComponent();

    expect(screen.getByTestId("cardContainer")).toBeInTheDocument();
  });
});
