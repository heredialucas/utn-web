import { Box, Flex, IconButton, Img } from "@chakra-ui/react";
import Image from "../../assets/images/img2.jpeg";

export default function NavBar() {
  return (
    <Box w="100vw" bg="#5e4485" p={["20px", "40px", "60px"]}>
      <Flex flexDirection={"row"} justifyContent={"space-between"}>
        <Img w={"100px"} src={Image}></Img>
        <IconButton>Button</IconButton>
      </Flex>
    </Box>
  );
}
