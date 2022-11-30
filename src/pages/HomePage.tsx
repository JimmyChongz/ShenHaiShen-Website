import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Stack, color, Img, Image, Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar"
import { MealList } from "../components/Table/Table"
import 'react-slideshow-image/dist/styles.css'
import { Introduction } from "../components/Introduction";
import { Footer } from "../components/footer";
import { SlideShow } from "../components/SlideShow";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <SlideShow />
      <Introduction />
      <Footer />
    </>
  )
}