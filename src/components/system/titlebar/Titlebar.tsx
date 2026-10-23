import Box from "@/components/ui/layouts/Box";
import Flex from "@/components/ui/layouts/Flex";
import Actions from "./Actions";
import Searchbar from "./Searchbar";

export default function Titlebar() {
  return (
    <Box data-tauri-drag-region>
      <Flex justifyContent="justify-between" alignItem="items-center">
        menu
        <Searchbar />
        <Actions />
      </Flex>
    </Box>
  );
}
