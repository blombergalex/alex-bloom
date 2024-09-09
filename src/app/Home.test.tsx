import { screen, render, fireEvent } from "@testing-library/react";
import Home from "./page";
import RootLayout from "./layout";

describe("Checks that the home page content renders and work as expected", () => {
  // unit test for each section - check that they render

  it("Checks that the scrollToTop functionality work as expected");
  render (
    <RootLayout>
    <Home />
    </RootLayout>
  )


  const scrollButton = screen.queryAllByTestId("scroll-btn");
  expect(scrollButton).not.toBeInTheDocument();


  // mock scrollEvent e.g. scrolling down to Connect component
  // render page - expect scrollbutton (test-id 'scroll-btn').toBeInTheDocument()
    // expect aboutComponent not to be visible (in document but not in view)
  // mock click on scrollButton
  // check that about component enters in view
});
