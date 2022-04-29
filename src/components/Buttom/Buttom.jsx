import { Box, IconButton } from "@chakra-ui/react";

export default function Buttom(props) {
  return (
    <Box w={`${props.w}vw`} bg="#5e4485" m={`${props.m}`} p={`${props.p}`}>
      <IconButton></IconButton>
    </Box>
  );
}
