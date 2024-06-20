import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../src/Components/Login";
import { describe, expect, test} from "vitest";
import { BrowserRouter } from "react-router-dom";


describe("Login component", () => {
  test("renders login form", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("validates email format", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);
    const errorText = screen.getByText("Invalid email format");
    expect(errorText).toBeInTheDocument();
  });

  test("validates password format", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "weakpassword" } });
    fireEvent.blur(passwordInput);
    const errorText = screen.getByText(
      "Password must contain at least one letter, one number, and one special character"
    );
    expect(errorText).toBeInTheDocument();
  });
  
});
