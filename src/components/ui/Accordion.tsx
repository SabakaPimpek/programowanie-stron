'use client'
import React from "react";

type AccordionProps = {
    question: string,
    answer: string,
}

export default function Accordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex flex-col gap-4 bg-white rounded-xl border border-gray-200 px-5 py-7 mb-4">
      <button
        className="flex justify-between items-center text-xl font-semibold cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2>{props.question}</h2>
        <span className="w-6 h-6">{isOpen ? "▼" : "▲"} </span>
      </button>
      {isOpen && <p className="text-lg leading-7 font-thin">{props.answer}</p>}
    </article>
  );
}