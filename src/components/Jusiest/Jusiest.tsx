import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Grid, Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { sliderData } from '~/data/sliderData';

import { SectionCard } from '../SectionCard/SectionCard';

export const Jusiest = () => (
    <Box w='100%' mb='20px'>
        <HStack justifyContent='space-between' mb='16px'>
            <Heading fontWeight={500} letterSpacing='1.4px' fontSize='36px' lineHeight='111%'>
                Самое сочное
            </Heading>
            <Button
                as={Link}
                to='/jusiest'
                bg='lime.400'
                size={{ base: 'md', '2xl': 'lg' }}
                rightIcon={<ArrowForwardIcon />}
                alignItems='center'
                data-test-id='juiciest-link'
                display={{ base: 'none', md: 'flex' }}
            >
                Вся подборка
            </Button>
        </HStack>
        {/* templateColumns='repeat(2, 1fr)' */}
        <Grid gap='16px'>
            {sliderData.map((item, index) => (
                <SectionCard key={index} {...item} />
            ))}
        </Grid>
    </Box>
);
