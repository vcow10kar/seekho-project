import styles from "./splash.module.css";
import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Button = styled.button`
  margin: 0 10px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? "#ffdb47" : "#c4c4c4")};
`;

const items = [
  {
    source: "logos/splash_1.png",

    desc: "Discover new books",
  },
  {
    source: "logos/splash_2.png",
    desc: "Prepare for your Exams",
  },
  {
    source: "logos/splash_3.png",
    desc: "Listen to best audiobooks and podcasts",
  },
];

export default function Splash() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  const handleNext = () => {
    if(localStorage.getItem('userId')) {
      window.location.pathname = '/explore';
    } else {
      window.location.pathname = '/signUp';
    }
  }

  const next = () => {
    if (activeItemIndex + 1 <= items.length - 1) {
      carouselRef.current.goTo(activeItemIndex + 1);
      setActiveItemIndex(activeItemIndex + 1);
    } else if (activeItemIndex + 1 === items.length) {
      handleNext();
    }
  };
  return (
    <div className = {styles.splashPage}>
      <div className={styles.splash}>
        {/* <h1>Splash Screen Carousel</h1> */}
        <Carousel
          ref={carouselRef}
          itemsToShow={1}
          showArrows={false}
          pagination={false}
          onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
        >
          {items.map((item, i) => (
            <div key={i}>
              <div>
                <img className = {styles.sourceImg} src={item.source} alt="splash" width="90%" />
              </div>
              <h2 className = {styles.splashText}>{item.desc}</h2>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.skipnext}>
        <button
          className={styles.skipbtn}
          onClick={handleNext}
        >
          SKIP
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
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

        <button
          className={styles.nextbtn}
          onClick={activeItemIndex <= items.length - 1 ? () => next() : null}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
