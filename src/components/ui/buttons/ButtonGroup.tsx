import type { ReactNode } from "react";
import { cn } from "@/utils/lib/cn";

interface ButtonGroupProps {
  className?: string;
  children: ReactNode;
}

export default function ButtonGroup({ className, children }: ButtonGroupProps) {
  return (
    <div className={cn("flex items-center w-fit", className)}>{children}</div>
  );
}
