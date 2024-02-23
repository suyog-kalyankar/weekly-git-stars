import React from "react";
import { render, screen } from "@testing-library/react";
import RadioBtnGroup from "./RadioBtnGroup";

const mockValues = ["Option1", "Option2", "Option3"];

describe("RadioBtnGroup Component", () => {
  it("renders without crashing", () => {
    render(<RadioBtnGroup radionValues={mockValues} onBtnChange={() => {}} />);
  });

  it("renders a FormLabel component with the correct label", () => {
    render(<RadioBtnGroup radionValues={mockValues} onBtnChange={() => {}} />);
    const formLabelElement = screen.getByText("Filter by starred repositories");
    expect(formLabelElement).toBeInTheDocument();
  });

  it("renders a RadioGroup component", () => {
    render(<RadioBtnGroup radionValues={mockValues} onBtnChange={() => {}} />);
    const radioGroupElement = screen.getByRole("radiogroup");
    expect(radioGroupElement).toBeInTheDocument();
  });

  it("renders FormControlLabel components for each radio value", () => {
    render(<RadioBtnGroup radionValues={mockValues} onBtnChange={() => {}} />);
    mockValues.forEach((value) => {
      const formControlLabelElement = screen.getByText(value);
      expect(formControlLabelElement).toBeInTheDocument();
    });
  });
});
