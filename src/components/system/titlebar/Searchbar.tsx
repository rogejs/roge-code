import Input from "@/components/ui/form/inputs/Input";
import Box from "@/components/ui/layouts/Box";

export default function Searchbar() {
  return (
    <Box>
      <Input title="search" type="text" placeholder="Search..." />
      <Box></Box>
    </Box>
  );
}
