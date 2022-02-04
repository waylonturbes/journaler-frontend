import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders journaler", () => {
  render(<App />);
  const linkElement = screen.getByText(/journaler/i);
  expect(linkElement).toBeInTheDocument();
});
