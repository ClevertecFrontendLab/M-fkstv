import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Heading, HStack, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router';

import { jusiestData } from '~/data/jusiestData';

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
        <SimpleGrid
            columns={2}
            gap={{ base: 3, md: 4 }}
            maxWidth='100%'
            minChildWidth={{ base: '300px', md: '450px' }}
        >
            {jusiestData.map((item, index) => (
                <SectionCard key={index} {...item} />
            ))}
        </SimpleGrid>
        <Center display={{ base: 'flex', md: 'none' }} mt={3}>
            <Button
                bg='lime.400'
                size={{ base: 'md', '2xl': 'lg' }}
                rightIcon={<ArrowForwardIcon />}
                alignItems='center'
                as={Link}
                to='/jusiest'
                data-test-id='juiciest-link-mobile'
            >
                Вся подборка
            </Button>
        </Center>
    </Box>
);
