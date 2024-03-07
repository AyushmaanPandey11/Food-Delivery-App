import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../../Contact";
import "@testing-library/jest-dom";

it("Checking the content of Contact rendering", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading"); // Use regular expression to match the heading text
    expect(heading).toBeInTheDocument();
});
        