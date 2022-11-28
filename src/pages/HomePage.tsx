import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Stack, color, Img, Image, Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar"
import { MealList } from "../components/Table/Table"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Introduction } from "../components/Introduction";
import { Footer } from "../components/footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const HomePage = () => {
  const slideImages = [
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

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ backgroundImage: `url(${slideImage.url})`, height: 750, backgroundSize: "cover" }} > {/*切換到手機版會很醜qq*/}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
  }
  return (
    <>
      <NavBar />
      <Slideshow />
      <Introduction />
      <Footer />
    </>
  )
}