import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./containers/Repositories", () => () => (
  <div data-testid="repositoriesContainer">Repositories Container</div>
));

describe("App Component", () => {
  it("renders App component correctly", () => {
    render(<App />);
    expect(screen.getByText("Repositories Container")).toBeInTheDocument();
  });
});
