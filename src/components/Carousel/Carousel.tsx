import { Box, Flex, Heading } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Slider, { CustomArrowProps } from 'react-slick';
import './react-slick.css';

import { Card } from '../Card';

interface NewArrowProps extends CustomArrowProps {
    next: boolean;
}

const NewArrow = ({
    currentSlide,
    slideCount,
    next,
    ...props
}: NewArrowProps) => (
    <div {...props}>{next ? <ArrowRightIcon /> : <ArrowLeftIcon />}</div>
);

const Carousel = () => {
    const settings = {
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Box marginTop={4} overflow={'hidden'}>
            <Heading>Tunis</Heading>
            <Slider
                {...settings}
                prevArrow={<NewArrow next={false} />}
                nextArrow={<NewArrow next={true} />}
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Slider>
        </Box>
    );
};

export default Carousel;
