/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import App from "./App";

const renderApp = () => {
  render(<App />);
};

describe("App", () => {
  it("should show test text", () => {
    renderApp();
    expect(screen.getByText("Test text")).toBeVisible();
  });
});
