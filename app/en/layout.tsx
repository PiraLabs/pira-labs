import { LangSetter } from "@/components/shared/LangSetter";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangSetter lang="en" />
      {children}
    </>
  );
}
