import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import type { AsChildren } from "@/types/props.type";
import { cn } from "@/utils/lib/cn";

interface FlexProps extends ComponentProps<"div"> {
  as?: AsChildren;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  inline?: boolean;
  alignItem?:
    | "items-start"
    | "items-end"
    | "items-end-safe"
    | "items-center"
    | "items-center-safe"
    | "items-baseline"
    | "items-baseline-last"
    | "items-stretch";
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-end-safe"
    | "justify-center"
    | "justify-center-safe"
    | "justify-between"
    | "justify-around"
    | "justify-evenly"
    | "justify-stretch"
    | "justify-baseline"
    | "justify-normal";
}

export default function Flex({
  as = "default",
  direction = "horizontal",
  reverse = false,
  inline = false,
  alignItem = "items-stretch",
  justifyContent = "justify-start",
  className,
  ...props
}: FlexProps) {
  const Comp = as === "default" ? "div" : Slot.Root;
  const flex = inline ? "flex-inline" : "flex";
  const flexReverse = [
    "flex",
    direction === "horizontal" ? "flex-row" : "flex-col",
    reverse && "reverse",
  ].join("-");

  return (
    <Comp
      className={cn(flex, flexReverse, alignItem, justifyContent, className)}
      {...props}
    />
  );
}
