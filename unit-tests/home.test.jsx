import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/home/page";
import Header from "../src/components/header";
import CardContainer from "../src/components/CardContainer";

// Mock IntersectionObserver for Framer-Motion animations
class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
}

global.IntersectionObserver = IntersectionObserver;

describe("Home", () => {
  it("renders the Header component", () => {
    render(<Home />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the CardContainer component", () => {
    render(<Home />);
    const cardContainerElement = screen.getByRole("main");
    expect(cardContainerElement).toBeInTheDocument();
  });
});

describe("Header", () => {
  it("renders the navigation links", () => {
    render(<Header />);
    const aboutLink = screen.getByText(/about us/i);
    expect(aboutLink).toBeInTheDocument();
  });
});

describe("CardContainer", () => {
  it("renders the correct number of cards", () => {
    render(<CardContainer />);
    const cards = screen.getAllByRole("link");
    expect(cards).toHaveLength(3);
  });

  // it('renders the correct card titles', () => {
  //   render(<CardContainer />);
  //   const cardTitles = screen.getAllByRole('heading', { name: /project/i });
  //   global.innerWidth = 1200;
  //   expect(cardTitles).toHaveLength(3);
  //   expect(cardTitles[0]).toHaveTextContent('XIV');
  //   expect(cardTitles[1]).toHaveTextContent('Project 2');
  //   expect(cardTitles[2]).toHaveTextContent('Project 3');
  // });
});
