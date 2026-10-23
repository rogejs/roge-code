import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import type { AsChildren } from "@/types/props.type";

interface BoxProps extends ComponentProps<"div"> {
  as?: AsChildren;
}

export default function Box({ as = "default", className, ...props }: BoxProps) {
  const Comp = as === "default" ? "div" : Slot.Root;
  return <Comp className={className} {...props} />;
}
