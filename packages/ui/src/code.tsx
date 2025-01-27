import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div>
      Turbobabka: <code className={className}>{children}</code>
    </div>
  );
}
