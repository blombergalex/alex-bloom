import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from '.';

describe("Contact Form functionality", () => {

  const mockSetEmail = jest.fn();
  const mockSetMessage = jest.fn();
  const mockHandleSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => e.preventDefault());

  const mockEmail = 'test@example.com';
  const mockMessage = 'This is a test message';

  const defaultProps = {
    setEmail: mockSetEmail,
    setMessage: mockSetMessage,
    handleSubmit: mockHandleSubmit,
  };

  it("Checks that input fields and submit button are rendered", () => {
    render(<ContactForm {...defaultProps} email="" message="" />);

    const emailInput = screen.getByLabelText("Your Email") as HTMLInputElement;
    const messageInput = screen.getByLabelText("Your Message") as HTMLTextAreaElement;
    const button = screen.getByRole("button", { name: "Send Message" });

    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Checks that user input in email and message fields are handled", () => {
    render(<ContactForm {...defaultProps}  email="" message="" />);

    const emailInput = screen.getByLabelText("Your Email") as HTMLInputElement;
    const messageInput = screen.getByLabelText("Your Message") as HTMLTextAreaElement;

    fireEvent.change(emailInput, {target:{value: mockEmail}});
    expect(mockSetEmail).toHaveBeenCalledWith(mockEmail);

    fireEvent.change(messageInput, {target:{value: mockMessage}});
    expect(mockSetMessage).toHaveBeenCalledWith(mockMessage);
  });

  it('Checks that handleSubmit is called on button click', () => {
    render(<ContactForm {...defaultProps} email={mockEmail} message={mockMessage}/>);
    fireEvent.submit(screen.getByTestId('contact-form'));
    expect(defaultProps.handleSubmit).toHaveBeenCalled();
  });
});