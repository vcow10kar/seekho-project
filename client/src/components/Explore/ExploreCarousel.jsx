import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import styles from './explore.module.css';
import styled from 'styled-components';
import ExploreCarouselItem from "./ExploreCarouselItem";

const Button = styled.button`
  margin: 0 4px;
  height: 9px;
  width: 9px;
  border-radius: 50%;
  opacity: 0.9;
  border: none;
  background-color: ${({ active }) => (active ? "#ffdb47" : "#c4c4c4")};
`;

function ExploreCarousel() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const carouselRef = useRef();

    const items = [
        {
            imageUrl: "/assets/exploreCarousel1.png",
            title: "",
            color: "",
            id: 1
        },

        {
            imageUrl: "/assets/exploreCarousel2.png",
            title: "Classified reads to get started",
            color: "#FFFFFF",
            id: 2
        }, 
        {
            imageUrl: "/assets/exploreCarousel3.png",
            title: "Best Audiobooks for your leisure",
            color: "#FFDB47",
            id: 3
        }
    ]

    return (
        <div className = {styles.exploreCarousel}>
            <Carousel
                ref={carouselRef}
                itemsToShow={1}
                showArrows={false}
                pagination={false}
                onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
            >
                {items.map(item => {
                            return (
                                <ExploreCarouselItem key = {item.id} imageUrl = {item.imageUrl} color = {item.color} title = {item.title}/>
                            )
                })}
            
            </Carousel>

            <div className = {styles.exploreCarouselButton} style = {{display: "flex", justifyContent: 'center'} }>
                {items.map((_, i) => (
                    <div>
                        <Button
                        key={i}
                        active={i === activeItemIndex}
                        onClick={() => carouselRef.current.goTo(i)}
                        />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ExploreCarousel;