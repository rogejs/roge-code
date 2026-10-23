import { Tooltip as T } from "radix-ui";
import type { ReactNode } from "react";
import type { AsChildren } from "@/types/props.type";

function TooltipTrigger({
  as = "children",
  ...props
}: T.TooltipTriggerProps & { as?: AsChildren }) {
  return <T.Trigger asChild={as === "children"} {...props} />;
}

export default function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: string;
}) {
  return (
    <T.Provider>
      <T.Root>
        {children}
        <T.Portal>
          <T.Content>{content}</T.Content>
        </T.Portal>
      </T.Root>
    </T.Provider>
  );
}

export { Tooltip, TooltipTrigger };
