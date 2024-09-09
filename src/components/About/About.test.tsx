import { screen, render } from "@testing-library/react";
import { AboutMeType } from "@/utils/types";
import AboutMe from ".";

const mockData:AboutMeType = {
  start: "This is a mock description written for the purpose of testing",
  experience: "This is a mock description of my experience for the purpose of testing",
  nextStep: "This is a mock description about the next step in my career",
  purpose: "This is a mock description of the purpose of this site"
}

describe("Checks that about component renders correctly", () => {
  it("Checks component renders", () => {
    render (<AboutMe {...mockData} />)
    const aboutMe = screen.getByTestId("about-me-section");
    expect(aboutMe).toBeInTheDocument();
  })

  it("Checks for About Me section title", () => {
    render(<AboutMe {...mockData} />);
    const greeting = screen.getByRole("heading", {
      level: 2,
      name: "About Me",
    });
    expect(greeting).toBeInTheDocument();
  });

  it("Checks for correct name", () => {
    render(<AboutMe {...mockData} />);
    const name = screen.getByRole("heading", {
      level: 3,
      name: "I'm Alexandra,",
    });
    expect(name).toBeInTheDocument();
  });

  it("Checks for introduction", () => {
    render(<AboutMe  {...mockData} />);
    const startText = screen.getByTestId("start");
    expect(startText).toBeInTheDocument();
    expect(startText).toHaveTextContent(mockData.start);
  });

  it("Checks for experience text", () => {
    render(<AboutMe  {...mockData} />);
    const experienceText = screen.getByTestId("experience");
    expect(experienceText).toBeInTheDocument();
    expect(experienceText).toHaveTextContent(mockData.experience);
  });

  it("Checks for text about next step", () => {
    render(<AboutMe  {...mockData} />);
    const nextStepText = screen.getByTestId("next-step");
    expect(nextStepText).toBeInTheDocument();
    expect(nextStepText).toHaveTextContent(mockData.nextStep);
  });

  it("Checks for description of the site's purpose", () => {
    render(<AboutMe {...mockData} />);
    const purposeText = screen.getByTestId("purpose");
    expect(purposeText).toBeInTheDocument();
    expect(purposeText).toHaveTextContent(mockData.purpose);
  });
});