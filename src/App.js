import {
  ChakraProvider,
  Box,
  SimpleGrid,
  Flex,
  Grid,
  VStack,
  StackDivider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import ThreeTierPricing from "@components/Pricing";
import theme from "./theme";
import Fonts from "./Fonts";
import { useState, useRef, useEffect } from "react";
import useObserver from "./hooks/useObserver";

function App() {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(1);
  console.log(currentVisibleIndex)
  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar currentVisibleIndex={currentVisibleIndex} />
      <Hero ref={heroRef} />
      <Features />
      <Statistics />
      <ThreeTierPricing />
      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
