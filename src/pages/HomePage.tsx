import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Stack, color, Img, Image, Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar"
import { MealList } from "../components/Table/Table"
import 'react-slideshow-image/dist/styles.css'
import { Introduction } from "../components/Introduction";
import { Footer } from "../components/footer";
import { SlideShow } from "../components/SlideShow";

const SlideImages = [
  {
    url: 'https://topeat.tw/images/main01.webp',
  },
  {
    url: 'https://topeat.tw/images/main02.webp',
  },
  {
    url: 'https://topeat.tw/images/main03.webp',
  },
  {
    url: 'https://topeat.tw/images/main04.webp',
  },
];


export const HomePage = () => {
  return (
    <>
      <NavBar />
      <SlideShow urls={SlideImages} />
      <Introduction />
      <Footer />
    </>
  )
}