import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';  // <--- Add this
import Home from "../components/Home";
import { name, city } from "../data/user";

test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
  render(<Home />);

  const h1 = screen.getByText(`${name} is a Web Developer from ${city}`);

  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("the h1 has a an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);

  const h1 = screen.getByText(`${name} is a Web Developer from ${city}`);

  expect(h1).toHaveStyle({ color: "firebrick" });
});
