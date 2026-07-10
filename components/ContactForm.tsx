"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState(
    "This form is a front-end placeholder and does not send messages yet.",
  );

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        // Connect this handler to a form provider or API route when a real endpoint is available.
        setStatus(
          "Message not sent yet. Add a real form endpoint here when the contact channel is ready.",
        );
      }}
    >
      <label>
        Name
        <input name="name" type="text" autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} />
      </label>
      <button type="submit">Test the placeholder form</button>
      <p role="status">{status}</p>
    </form>
  );
}
