"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  heading?: string;
};

export function FAQ({ items, heading = "Perguntas frequentes" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div>
        {heading && (
          <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
            {heading}
          </h2>
        )}
        <dl className="space-y-1">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-off-white/10">
                <dt>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left text-off-white font-body font-medium text-base md:text-lg hover:text-peach transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`shrink-0 mt-0.5 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="pb-5 text-off-white/80 font-body text-base leading-relaxed">
                    {item.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </>
  );
}
