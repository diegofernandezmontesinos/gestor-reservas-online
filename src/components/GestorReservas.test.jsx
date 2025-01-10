import { screen, render } from "@testing-library/react";
import GestorReservas from "./GestorReservas";

describe("Component GestorRestaurante", () => {
  it("should render Gestor Restaurante", () => {
    render(<GestorReservas />);
    expect(screen.getByText("Gestor de Reservas Online")).toBeInTheDocument();
  });
});
