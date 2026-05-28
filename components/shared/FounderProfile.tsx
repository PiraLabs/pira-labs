import Image from "next/image";

type FounderProfileProps = {
  name: string;
  role: string;
  bio: string[];
  credentials: string[];
  photoSrc?: string;
  photoAlt?: string;
  linkedinHref?: string;
};

export function FounderProfile({
  name,
  role,
  bio,
  credentials,
  photoSrc,
  photoAlt,
  linkedinHref,
}: FounderProfileProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {photoSrc && (
        <div className="shrink-0">
          <Image
            src={photoSrc}
            alt={photoAlt || `${name}, ${role} da Pira Labs`}
            width={240}
            height={300}
            className="rounded-lg object-cover w-48 md:w-60"
          />
        </div>
      )}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-off-white mb-1">{name}</h2>
        <p className="text-orange font-medium font-body mb-4">{role}</p>
        <div className="space-y-3 mb-6">
          {bio.map((paragraph, index) => (
            <p key={index} className="text-off-white/85 font-body leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="space-y-1 mb-4">
          {credentials.map((cred, index) => (
            <li
              key={index}
              className="text-sm text-off-white/60 font-body before:content-['·'] before:mr-2 before:text-orange"
            >
              {cred}
            </li>
          ))}
        </ul>
        {linkedinHref && (
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-off-white/60 underline hover:text-orange transition-colors font-body"
            aria-label={`LinkedIn de ${name} (abre em nova aba)`}
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
