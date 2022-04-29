import { Box, HStack, Icon } from "@chakra-ui/react";

export default function SocialMedia(props) {
  return (
    <Box
      w="80vw"
      bg="#020202"
      m={["5px auto", "10px auto", "20px auto"]}
      p={["20px", "40px", "60px"]}
    >
      <h1>Redes Sociales</h1>
      <HStack d={"flex"} justifyContent={"center"}>
        <Icon name="facebook" size="40px" color="white" />
        <Icon name="twitter" size="40px" color="white" />
        <Icon name="instagram" size="40px" color="white" />
        <Icon name="youtube" size="40px" color="white" />
      </HStack>
    </Box>
  );
}
