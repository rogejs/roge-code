import { getCurrentWindow } from "@tauri-apps/api/window";
import { Minimize2Icon, SquareIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/buttons/Button";
import ButtonGroup from "@/components/ui/buttons/ButtonGroup";
import Tooltip, { TooltipTrigger } from "@/components/ui/Tooltip";

const appWindow = getCurrentWindow();

export default function Actions() {
  const { t } = useTranslation("title-bar");
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    appWindow.isMaximized().then(setMaximized);

    const unlisten = appWindow.onResized(async () => {
      const isMaximized = await appWindow.isMaximized();
      setMaximized(isMaximized);
    });

    return () => {
      unlisten.then((fn) => fn());
    };
  }, []);

  return (
    <ButtonGroup>
      <Tooltip content={t("title-actions.minimize")}>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => appWindow.minimize()}
          >
            <Minimize2Icon />
          </Button>
        </TooltipTrigger>
      </Tooltip>
      <Tooltip
        content={t(
          maximized ? "title-actions.maximize" : "title-actions.restore",
        )}
      >
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => appWindow.toggleMaximize()}
          >
            <SquareIcon />
          </Button>
        </TooltipTrigger>
      </Tooltip>
      <Tooltip content={t("title-actions.close")}>
        <TooltipTrigger>
          <Button variant="ghost" size="xs" onClick={() => appWindow.close()}>
            <XIcon />
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </ButtonGroup>
  );
}
