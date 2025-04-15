import { Box, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react';

import { sliderData } from '~/data/sliderData';

import FirtsDishes from '../../assets/icons/firtsDishes.svg';
import SecondDishes from '../../assets/icons/secondDish.svg';
import { RecomendationCard } from '../RecomendationCard/RecomendationCard';
import { ShortCard } from '../RecomendationCard/ShortCard';

const img = [SecondDishes, SecondDishes, FirtsDishes];

export const RecomendationSection = ({ title, desc }: { title: string; desc: string }) => {
    const left = sliderData.slice(0, 2);
    const rigth = sliderData.slice(1, 4);
    return (
        <Box>
            <Grid
                gap='18px'
                gridTemplateColumns={{
                    base: '1fr',
                    md: '1fr 2fr',
                    '2xl': '1fr 1fr',
                }}
                mb='24px'
            >
                <Heading lineHeight='111%' fontWeight={500} fontSize='36px' letterSpacing='1.4px'>
                    {title}
                </Heading>
                <Text fontWeight={500} fontSize='16px' color='blackAlpha.600'>
                    {desc}
                </Text>
            </Grid>
            <Flex gap='16px'>
                {left.map((item, index) => (
                    <RecomendationCard key={index} {...item} />
                ))}
                <VStack flex='1 0 calc(34% - 16px)'>
                    {rigth.map((item, index) => (
                        <ShortCard key={index} title={item.title} image={img[index]} />
                    ))}
                </VStack>
            </Flex>
        </Box>
    );
};
