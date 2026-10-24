import { Group, Panel, Separator } from "react-resizable-panels";
import Statusbar from "./components/system/status-bar/Statusbar";
import Titlebar from "./components/system/title-bar/Titlebar";
import Flex from "./components/ui/layouts/Flex";
import "./style.css";
import Sidebar from "./components/system/side-bar/Sidebar";

function App() {
  return (
    <Flex
      direction="vertical"
      alignItem="items-center"
      justifyContent="justify-between"
      className="w-full h-dvh *:w-full overscroll-y-auto"
    >
      <Titlebar />
      <main className="flex-1">
        <Group orientation="horizontal" className="h-full">
          <Panel defaultSize={"20%"} minSize={"10%"} maxSize={"25%"}>
            <Sidebar />
          </Panel>
          <Separator className="separator-resize separator-vertical" />
          <Panel defaultSize={"60%"}>
            <Group orientation="vertical">
              <Panel defaultSize={"65%"}>editor</Panel>
              <Separator className="separator-resize separator-horizontal" />
              <Panel defaultSize={"35%"} maxSize={"80%"}>
                terminal
              </Panel>
            </Group>
          </Panel>
          <Separator className="separator-resize separator-vertical" />
          <Panel defaultSize={"20%"} minSize={"10%"} maxSize={"25%"}>
            right
          </Panel>
        </Group>
      </main>
      <Statusbar />
    </Flex>
  );
}

export default App;
