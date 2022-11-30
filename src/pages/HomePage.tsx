import { NavBar } from "../components/NavBar"
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