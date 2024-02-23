import React from "react";
import { render, screen } from "@testing-library/react";
import AvtarChip from "./AvtarChip";

const mockProps = {
  avtarUrl: "https://github.com/avatar.png",
  userName: "Suyog K",
};

describe("AvtarChip Component", () => {
  it("renders without crashing", () => {
    render(<AvtarChip {...mockProps} />);
  });

  it("renders a Chip component", () => {
    render(<AvtarChip {...mockProps} />);
    const chipElement = screen.getByTestId("avtar-chip");
    expect(chipElement).toBeInTheDocument();
  });

  it("renders an Avatar component with the correct src prop", () => {
    render(<AvtarChip {...mockProps} />);
    const avatarElement = screen.getByAltText("avtar-img");
    expect(avatarElement).toHaveAttribute("src", mockProps.avtarUrl);
  });

  it("sets the label in the Chip to the userName", () => {
    render(<AvtarChip {...mockProps} />);
    const chipElement = screen.getByText(mockProps.userName);
    expect(chipElement).toBeInTheDocument();
  });
});
