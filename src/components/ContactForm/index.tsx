import React from "react";

type ContactFormProps = {
  email: string;
  message: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ContactForm = ({ email, message, setEmail, setMessage, handleSubmit }: ContactFormProps) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="contact-form" className="flex flex-col space-y-4">
      <label htmlFor="email" className="text-gray-200">Your Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
        className="p-2 text-black rounded"
        placeholder="Enter your email"
      />

      <label htmlFor="message" className="text-gray-200">Your Message</label>
      <textarea
        id="message"
        value={message}
        onChange={handleMessageChange}
        required
        className="p-2 text-black rounded"
        placeholder="Enter your message"
        rows={4}
      />

      <button
        type="submit"
        className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
