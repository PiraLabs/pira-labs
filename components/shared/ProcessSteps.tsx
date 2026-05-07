type Step = {
  number?: number | string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
  heading?: string;
};

export function ProcessSteps({ steps, heading }: ProcessStepsProps) {
  return (
    <div>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          {heading}
        </h2>
      )}
      <ol className="space-y-8">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-6 items-start">
            <span
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-orange text-orange font-body font-semibold text-sm"
              aria-hidden="true"
            >
              {step.number ?? index + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-off-white mb-1">
                {step.title}
              </h3>
              <p className="text-off-white/80 font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
