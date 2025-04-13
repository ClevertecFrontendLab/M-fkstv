import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, SimpleGrid } from '@chakra-ui/react';

import { blogsData } from '~/data/blogsData';

import { BlogCard } from '../BlogCard/BlogCard';

export const Blogs = () => (
    <Box w='100%' bg='lime.300' p='24px' gap='16px' borderRadius='16px'>
        <HStack justifyContent='space-between' mb='16px'>
            <Heading fontWeight={500} letterSpacing='0.9px' fontSize='30px' lineHeight='120%'>
                Кулинарные блоги
            </Heading>
            <Button
                bg='lime.300'
                variant='ghost'
                size={{ base: 'md', '2xl': 'lg' }}
                rightIcon={<ArrowForwardIcon />}
                alignItems='center'
                display={{ base: 'none', md: 'flex' }}
            >
                Все авторы
            </Button>
        </HStack>

        <SimpleGrid gap='16px' columns={3}>
            {blogsData.map((item, index) => (
                <BlogCard key={index} {...item} />
            ))}
        </SimpleGrid>
    </Box>
);
