import * as React from "react";
import Accordion from "./ui/Accordion";

export default function FAQSection() {
  const faqs = [
  {
    question: "Czym dokładnie zajmuje się pies przewodnik?",
    answer: "Pies przewodnik pomaga osobom niewidomym lub niedowidzącym poruszać się bezpiecznie w różnych środowiskach — unika przeszkód, wskazuje przejścia dla pieszych i prowadzi swojego opiekuna w znane miejsca.",
  },
  {
    question: "Czy pies przewodnik może mieszkać z rodziną?",
    answer: "Tak, pies przewodnik mieszka ze swoim opiekunem i może być częścią rodziny. Po pracy ma czas na relaks, zabawę i odpoczynek jak każdy inny pies.",
  },
  {
    question: "Czy można pogłaskać psa przewodnika w trakcie pracy?",
    answer: "Nie. Głaskanie psa przewodnika podczas pracy może go rozproszyć i zagrozić bezpieczeństwu osoby, którą prowadzi. Zawsze należy zapytać właściciela o pozwolenie.",
  },
];

  return (
    <div className="bg-gray-200 py-10 px-5 bg-[F4F7FA]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center mb-8 text-5xl font-semibold">
          Często zadawane pytania
        </h1>
        <p className="text-lg text-center mb-14 font-light">
          Przykładowa lista rozwijana z przykładowymi pytaniami i odpowiedziami
        </p>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
        <div className="text-center mt-12 text-lg font-light">
          Nie możesz znaleźć odpowiedzi?
          <a
            href="/support"
            className="hover:text-blue-700 ml-2 text-violet-600 font-light"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </div>
  );
}