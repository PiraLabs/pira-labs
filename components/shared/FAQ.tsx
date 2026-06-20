export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  heading?: string;
};

export function FAQ({ items, heading = "Perguntas frequentes" }: FAQProps) {
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
          <h2 className="type-h2 text-sand mb-8">
            {heading}
          </h2>
        )}
        <div className="space-y-1">
          {items.map((item, index) => (
            <details key={index} className="hr-on-dark-b group">
              <summary className="w-full flex items-start justify-between gap-4 py-5 text-left text-off-white font-body font-medium text-base md:text-lg hover:text-orange transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">
                <span>{item.question}</span>
                <span
                  className="shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              {item.answer.split('\n\n').map((para, pIdx, arr) => (
                <p
                  key={pIdx}
                  className={`text-off-white/80 font-body text-base leading-relaxed ${pIdx < arr.length - 1 ? 'mb-3' : 'pb-5'}`}
                >
                  {para}
                </p>
              ))}
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
