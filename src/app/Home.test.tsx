import {screen, render, fireEvent, waitFor} from '@testing-library/react'
import Home from './page'


class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}

  observe(target: Element) {
  } unobserve(target: Element) {
  } disconnect() {
  } takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserver;

describe("Home page rendering", () => {
  it("Checks if the 'visibleSignal' appears when scrolling to project section", () => {
    render(<Home />);

    const aboutSection = screen.getByTestId("aboutMe");
    const projectSection = screen.getByTestId("projects");
    const visibleSignal = screen.queryByTestId("visibleSignal");
    
    expect(visibleSignal).not.toBeInTheDocument();
    expect(aboutSection).toBeInTheDocument();
    expect(projectSection).toBeInTheDocument();
    
    // Mock the height of the sections and the window's inner height

      const aboutSectionHeight = aboutSection.getBoundingClientRect().height; 
      const projectSectionTop = projectSection.getBoundingClientRect().top;
      const windowInnerHeight = window.innerHeight; 
      
      console.log("aboutSectionHeight: ", aboutSectionHeight);// get 0
      console.log("windowInnerHeight: ", windowInnerHeight); // 768 
      console.log("projectSectionTop: ", projectSectionTop); // get 0
      
      
      const scrollTo = jest.spyOn(window, 'scrollTo');
      window.scrollTo = jest.fn();
      
    console.log("position before scroll: ", window.scrollY)
    const newScrollPosition = window.scrollY - windowInnerHeight - 300; // project section enters viewport when scrolled 768 + 212 = 980
    fireEvent.scroll(window, { target: { scrollY: newScrollPosition } });
    
    console.log("position after scroll: ", window.scrollY)
    
    const updatedVisibleSignal = screen.queryByTestId("visibleSignal");
    expect(updatedVisibleSignal).toBeInTheDocument();

    scrollTo.mockRestore();
    
  })
});