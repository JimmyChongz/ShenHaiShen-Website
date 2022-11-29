import { Box } from "@chakra-ui/react"
import React from "react"
import { Slide } from 'react-slideshow-image';

type slideShowProps = {
    url: string,
}

interface SlideShowProps {
    urls: slideShowProps[]
}

export const SlideShow = ({ urls }: SlideShowProps) => {
    return (
        <div className="slide-container">
            <Slide>
                {urls.map((slideImage) => (
                    <div className="each-slide">
                        <div style={{ backgroundImage: `url(${slideImage.url})`, height: 750 }} />
                    </div>
                ))}
            </Slide>
        </div>
    )
} 