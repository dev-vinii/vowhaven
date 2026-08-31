import { cn } from "@/lib/utils";

export function AzulejoFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("azulejo p-3 sm:p-4", className)}>
      <div className="bg-surface px-6 py-10 sm:px-12 sm:py-14">{children}</div>
    </div>
  );
}
