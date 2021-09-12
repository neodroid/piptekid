import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link,
  Image,
  useToast,
} from "@chakra-ui/core";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: "/slider1.png",
    altText: "Slide 1",
    key: "1",
  },
  {
    src: "/slider2.png",
    altText: "Slide 2",
    key: "2",
  },
  {
    src: "/slider3.png",
    altText: "Slide 3",
    key: "3",
  },
];

const ContainerTechno = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <>
      <Heading
        as="h1"
        fontSize={["1.875rem", "2rem"]}
        letterSpacing={".1rem"}
        fontFamily="heading"
        fontWeight="bold"
        m="10px auto"
      >
        <Text color="#254D69" fontFamily="heading" textAlign="center">
          Acara Technoskill Sebelumnya
        </Text>
      </Heading>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default ContainerTechno;
