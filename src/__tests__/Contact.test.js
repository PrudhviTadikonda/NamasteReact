import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
  test("renders the Contact Us page with header", () => {
    render(<Contact />);
    const header = screen.getByText("Contact Us");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("text-4xl font-extrabold text-red-600");
  });

  test("renders the introductory paragraph", () => {
    render(<Contact />);
    const paragraph = screen.getByText(/We'd love to hear from you!/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass("text-lg text-gray-700");
  });

  test("renders the contact form with inputs and submit button", () => {
    render(<Contact />);

    // Check for Name Input
    const nameInput = screen.getByLabelText("Your Name");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("placeholder", "Enter your name");

    // Check for Email Input
    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("placeholder", "Enter your email");

    // Check for Message Textarea
    const messageTextarea = screen.getByLabelText("Your Message");
    expect(messageTextarea).toBeInTheDocument();
    expect(messageTextarea).toHaveAttribute(
      "placeholder",
      "Type your message here"
    );

    // Check for Submit Button
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveClass("bg-red-500 text-white");
  });

  test("renders the location details", () => {
    render(<Contact />);
    const locationHeader = screen.getByText("Our Location");
    expect(locationHeader).toBeInTheDocument();
    expect(locationHeader).toHaveClass("text-2xl font-bold text-black");

    const address = screen.getByText(/1234 Elm Street/i);
    expect(address).toBeInTheDocument();

    const phoneLink = screen.getByText("+1 (234) 567-890");
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:+1234567890");

    const emailLink = screen.getByText("contact@foodonwheels.com");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:contact@foodonwheels.com"
    );
  });

  test("allows users to type in the form fields", () => {
    render(<Contact />);

    // Simulate typing into the Name Input
    const nameInput = screen.getByLabelText("Your Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    // Simulate typing into the Email Input
    const emailInput = screen.getByLabelText("Email Address");
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    expect(emailInput.value).toBe("johndoe@example.com");

    // Simulate typing into the Message Textarea
    const messageTextarea = screen.getByLabelText("Your Message");
    fireEvent.change(messageTextarea, {
      target: { value: "Hello, this is a test message!" },
    });
    expect(messageTextarea.value).toBe("Hello, this is a test message!");
  });

  test("submit button is clickable", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });
});
