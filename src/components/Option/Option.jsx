import { Box } from "@chakra-ui/react";

export default function Option(props) {
  return (
    <>
      <Box
        w={`${props.w}vw`}
        bg="#5e4485"
        m={["5px", "10px", "20px"]}
        p={["20px", "40px", "60px"]}
      >
        <h2>{props.title}</h2>
      </Box>
    </>
  );
}
