import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GestorReservas from "./GestorReservas";

const renderGestorReservas = () => {
  render(<GestorReservas />);
};

describe("Component GestorRestaurante", () => {
  it("should render Gestor Restaurante", () => {
    renderGestorReservas();
    expect(screen.getByText("Gestor de Reservas Online")).toBeInTheDocument();
  });

  it("should show an input with placeholder Client Name", () => {
    renderGestorReservas();
    const input = screen.getByPlaceholderText("Client Name");
    expect(input).toBeInTheDocument();
  });

  it("should show a button with text Reserve Table", () => {
    renderGestorReservas();
    const button = screen.getByText(/Reserve Table/i);
    expect(button).toBeInTheDocument();
  });

  it("should show a select field", () => {
    renderGestorReservas();
    const select = screen.getByLabelText(/Number of Guests/i);
    expect(select).toBeInTheDocument();
  });

  it("should enable the button if all fields are not empty", () => {
    renderGestorReservas();
    const input = screen.getByPlaceholderText("Client Name");
    const select = screen.getByLabelText(/Number of Guests/i);
    const button = screen.getByText(/Reserve Table/i);

    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: "Diego" } });
    fireEvent.change(select, { target: { value: "3" } });

    expect(button).toBeEnabled();
  });

  it('should show "Searching disponibility" after clicking the button', () => {
    renderGestorReservas();
    const input = screen.getByPlaceholderText("Client Name");
    const select = screen.getByLabelText(/Number of Guests/i);
    const button = screen.getByText(/Reserve Table/i);

    fireEvent.change(input, { target: { value: "Diego" } });
    fireEvent.change(select, { target: { value: "3" } });

    fireEvent.click(button);
    expect(screen.getByText("Searching disponibility")).toBeInTheDocument();
  });

  it("should show no availability for more than 6 guests", async () => {
    renderGestorReservas();
    const input = screen.getByPlaceholderText("Client Name");
    const select = screen.getByLabelText("Number of Guests");
    const button = screen.getByText(/Reserve Table/i);

    fireEvent.change(input, { target: { value: "Diego" } });
    fireEvent.change(select, { target: { value: "8" } });
    fireEvent.click(button);

    expect(screen.getByText("Searching disponibility")).toBeInTheDocument();

    await waitFor(() =>
      expect(
        screen.getByText("No tables available for Diego")
      ).toBeInTheDocument()
    );
  });

  it("should show 'reserved table for {name}' for 6 guests or less", async () => {
    renderGestorReservas();
    const input = screen.getByPlaceholderText("Client Name");
    const select = screen.getByLabelText("Number of Guests");
    const button = screen.getByText(/Reserve Table/i);

    fireEvent.change(input, { target: { value: "Diego" } });
    fireEvent.change(select, { target: { value: "6" } });
    fireEvent.click(button);

    expect(screen.getByText("Searching disponibility")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Reserved table for Diego")).toBeInTheDocument()
    );
  });
});
