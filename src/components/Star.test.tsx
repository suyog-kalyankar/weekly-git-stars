import React from "react";
import { render, screen } from "@testing-library/react";
import StarHandler from "./Star";

const mockProps = {
  starred: false,
  onStarredChange: jest.fn(),
  selectedId: 1,
};

describe("StarManager Component", () => {
  it("renders without crashing", () => {
    render(<StarHandler {...mockProps} />);
  });

  it("renders a Button component", () => {
    render(<StarHandler {...mockProps} />);
    const buttonElement = screen.getByRole("star-btn-role");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a Star icon", () => {
    render(<StarHandler {...mockProps} />);
    const starIconElement = screen.getByTestId("StarIcon");
    expect(starIconElement).toBeInTheDocument();
  });
});
