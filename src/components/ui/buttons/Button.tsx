import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import type { AsChildren } from "@/types/props.type";
import { cn } from "@/utils/lib/cn";

const variants = {
  primary: {
    base: "btn-primary",
    danger: "btn-primary--danger",
  },
  secondary: {
    base: "btn-secondary",
    danger: "btn-secondary--danger",
  },
  outline: {
    base: "btn-outline",
    danger: "btn-outline--danger",
  },
  ghost: {
    base: "btn-ghost",
    danger: "btn-ghost--danger",
  },
};

const sizes = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};

interface ButtonProps extends ComponentProps<"button"> {
  as?: AsChildren;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  danger?: boolean;
}

export default function Button({
  as = "default",
  className,
  variant = "primary",
  size = "md",
  danger = false,
  ...props
}: ButtonProps) {
  const Comp = as === "default" ? "button" : Slot.Root;
  return (
    <Comp
      className={cn(
        "btn smooth",
        variants[variant][danger ? "base" : "danger"],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
