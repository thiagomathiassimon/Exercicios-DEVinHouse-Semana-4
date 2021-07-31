import { findByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormDialog } from "./FormDialog";

const renderComponent = (props) =>
  render(<FormDialog open={true} {...props} />);

describe("FormDialog Component", () => {
  it("Deve renderizar o fomulário corretamente", () => {
    renderComponent();

    expect(screen.getByText("Adicionar Pet")).toBeInTheDocument();
  });

  it("Deve renderizar o campo Imagem", () => {
    renderComponent();

    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("Deve mostrar mensagem de erro no campo Imagem", async () => {
    renderComponent();

    const image = screen.getByTestId("image");
    userEvent.click(image);

    userEvent.tab();

    expect(screen.findByText("Campo obrigatório!"));
  });
});
