import ContactForm from "@/components/ContactForm";
import React from "react";

type Props = {};

const ContactMePage = (props: Props) => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="flex items-center justify-start px-20 w-[70%] md:w-[40%] h-full ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
