import {screen, render} from '@testing-library/react'
import ScrollButton from '.'

it("Checks that scroll button exists", () => {
  render(<ScrollButton />)
  const scrollButton = screen.getByRole("button", {name: "Back to top"});
  expect(scrollButton).toBeInTheDocument();
})