import { Card, CardBody, CardFooter, CardHeader, Heading, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/types';

import { CategoryTag } from '../CategoryTag/CategoryTag';

export const RecomendationCard: FC<CardProps> = ({ title, desc, category, liked, bookmark }) => (
    <Card variant='outline'>
        <CardHeader p={{ base: 3, md: 4, '2xl': 6 }} pb={{ base: 0, md: 0, '2xl': 0 }}>
            <Heading
                fontSize={{ base: 'md', md: 'xl' }}
                noOfLines={{ base: 2, md: 1 }}
                fontWeight={500}
            >
                {title}
            </Heading>
        </CardHeader>
        <CardBody p={{ base: 3, md: 4, '2xl': 6 }} pt={{ base: 2, md: 2, '2xl': 2 }}>
            <Text noOfLines={3} fontSize='sm' lineHeight={5}>
                {desc}
            </Text>
        </CardBody>
        <CardFooter p={{ base: 3, md: 4, '2xl': 6 }} pt={{ base: 0, md: 0, '2xl': 0 }}>
            <HStack justifyContent='space-between' w='100%'>
                <CategoryTag
                    category={category}
                    liked={liked}
                    bookmark={bookmark}
                    color='lime.50'
                />
            </HStack>
        </CardFooter>
    </Card>
);
