type TargetProfileProps = {
  heading?: string;
  items: string[];
};

export function TargetProfile({
  heading = "Para quem é",
  items,
}: TargetProfileProps) {
  return (
    <div className="bg-teal/30 border border-teal/50 rounded-lg p-8">
      <h2 className="text-xl font-semibold text-off-white mb-6">{heading}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-off-white/90 font-body leading-relaxed">
            <span className="shrink-0 text-orange mt-0.5" aria-hidden="true">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
