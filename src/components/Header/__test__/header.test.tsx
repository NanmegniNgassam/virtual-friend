import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "..";

describe("Button component", () => {
  it("renders with the correct label", () => {
    render(<Header />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Header />);
    
    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
