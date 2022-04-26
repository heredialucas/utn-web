import { Box, Flex, IconButton, Img } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Box w="100vw" bg="#5e4485" p={["40px", "60px", "80px"]}>
      <Flex flexDirection={"row"} justifyContent={"space-between"}>
        <Img></Img>

        <IconButton>Button</IconButton>
      </Flex>
    </Box>
  );
}
