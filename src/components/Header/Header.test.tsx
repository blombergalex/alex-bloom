import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Tests for header component", () => {
  it("Checks the header container is rendered", () => {
    render(<Header />);
    const headerContainer = screen.getByTestId("header");
    expect(headerContainer).toBeInTheDocument();
  });

  it("Checks that the header has a specific title", () => {
    render(<Header />);
    const headerText1 = screen.getByRole("heading", {
      level: 1,
      name: "ALEXANDRA BLOMBERG",
    });
    expect(headerText1).toBeInTheDocument();
  });
});
