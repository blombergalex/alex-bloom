import { screen, render } from "@testing-library/react";
import { ConnectType } from "@/utils/types";
import Connect from ".";

const mockData:ConnectType = {
  connectText:"This is a mocktext for the connect section",
  imgSrc: "/images/mock-profile.jpg",
  alt: "Mock alt text for testing purposes",
}

describe("Checks that Connect component renders correctly", () => {
  it("Checks component renders", () => {
    render (<Connect {...mockData} />)
    const aboutMe = screen.getByTestId("connect-section");
    expect(aboutMe).toBeInTheDocument();
  })
  
    it("Checks for Connect section title", () => {
      render(<Connect {...mockData} />);
      const connectSectionTitle = screen.getByRole("heading", {
        level: 2,
        name: "Let's Connect",
      });
      expect(connectSectionTitle).toBeInTheDocument();
    });

  it("Checks for connect text", () => {
    render(<Connect  {...mockData} />);
    const startText = screen.getByTestId("connect-text");
    expect(startText).toBeInTheDocument();
    expect(startText).toHaveTextContent(mockData.connectText);
  });

  it("Checks for mail address", () => {
    render(<Connect {...mockData}/>);
    const mailLink = screen.getByRole("link", {
      name: "blombergalexandras@gmail.com",
    });
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute(
      "href",
      "mailto:blombergalexandras@gmail.com"
    );
  });

  it("Checks for LinkedIn link", () => {
    render(<Connect {...mockData}/>);
    const socialLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/alexandra-blomberg-7231a616a/"
    );
  });

  it("Checks for image", () => {
    render(<Connect {...mockData} />);
    const profileImage = screen.getByRole("img", { name: mockData.alt });
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent(mockData.imgSrc))
    );
  });
});
