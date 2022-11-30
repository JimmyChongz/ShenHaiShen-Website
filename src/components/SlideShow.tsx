import { Box } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";

const SlideImages = [
    {
        url: "https://topeat.tw/images/main01.webp",
    },
    {
        url: "https://topeat.tw/images/main02.webp",
    },
    {
        url: "https://topeat.tw/images/main03.webp",
    },
    {
        url: "https://topeat.tw/images/main04.webp",
    },
];

export const SlideShow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {SlideImages.map((slideImage) => (
                    <div className="each-slide">
                        <div>
                            <Box bgImage={slideImage.url} bgRepeat='no-repeat' style={{ height: 700 }} />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};
