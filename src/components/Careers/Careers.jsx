import { Box } from "@chakra-ui/react";
import Accor from "../Accor/Accor";
export default function Careers() {
  return (
    <>
      <Box
        w="100vw"
        bg="#5e4485"
        m={["5px", "10px", "20px"]}
        p={["20px", "40px", "60px"]}
      >
        <h2>Ofertas Académica</h2>
        <Accor />
        <Accor />
      </Box>
    </>
  );
}
