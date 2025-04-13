import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, HStack, IconButton } from '@chakra-ui/react';

import { sliderData } from '~/data/sliderData.ts';

import { Card } from '../Card/Card.tsx';

export const Slider: React.FC = () => (
    <Flex direction='column' maxWidth='100%'>
        <Heading
            textAlign='left'
            letterSpacing='0.9px'
            fontWeight={500}
            fontSize='36px'
            lineHeight='111%'
            mb='24px'
        >
            Новые рецепты
        </Heading>
        <Flex mb='16px' position='relative'>
            <IconButton
                aria-label='back'
                icon={<ArrowBackIcon />}
                position='absolute'
                bg='black'
                color='white'
                zIndex='1'
                top='37%'
                left='0%'
                transform='translate(-50%)'
            />
            <HStack overflowX='hidden' spacing='12px'>
                {sliderData.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
                <IconButton
                    aria-label='forward'
                    icon={<ArrowForwardIcon />}
                    position='absolute'
                    bg='black'
                    color='white'
                    zIndex='1'
                    top='37%'
                    left='100%'
                    transform='translate(-50%)'
                />
            </HStack>
        </Flex>
    </Flex>
);
