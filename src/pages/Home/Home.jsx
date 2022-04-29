import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Buttom from "../../components/Buttom/Buttom";
import { Flex } from "@chakra-ui/react";
import Careers from "../../components/Careers/Careers";
import Option from "../../components/Option/Option";
import Notice from "../../components/Notices/Notices";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
// import Sidebar from "../../components/Sidebar/Siderbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Slider />
      <Flex flexDirection={"row"}>
        <Buttom w={50} p={"10px"} />
        <Buttom w={50} p={"10px"} />
      </Flex>
      <Buttom w={70} m={"5px auto"} p={"10px"} />
      <Careers />
      <Flex justifyContent={"center"} flexDirection={"row"}>
        <Option title={"Test 1"} w={25} />
        <Option title={"Test 2"} w={25} />
      </Flex>
      <Flex justifyContent={"center"} flexDirection={"row"}>
        <Option title={"Test 3"} w={25} />
        <Option title={"Test 4"} w={25} />
      </Flex>
      <Notice />
      <Notice />
      <Notice />
      <SocialMedia />
      <Footer />
      <Outlet />
    </>
  );
}
