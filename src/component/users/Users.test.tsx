import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import React from "react";
// import { rest } from "msw";
// import { server } from "../../mocks/server";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
