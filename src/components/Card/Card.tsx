import {
    Card as ChakraCard,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/types';

import { CategoryTag } from '../CategoryTag/CategoryTag';

export const Card: FC<CardProps> = (card) => (
    <ChakraCard
        variant='outlined'
        flexBasis={{ base: '158px', md: '277', xl: '322px' }}
        flexShrink={0}
        maxW='322px'
        border='1px solid rgba(0, 0, 0, 0.08)'
        _hover={{
            boxShadow:
                ' 0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            // '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        }}
    >
        <CardBody p={0} m={0}>
            <Image
                borderTopLeftRadius='5px'
                borderTopRightRadius='5px'
                w='100%'
                h='230px'
                m={0}
                src={card.image}
            />
            <Stack p='12px'>
                <Heading
                    size='md'
                    fontWeight={500}
                    lineHeight='140%'
                    letterSpacing='0.5px'
                    noOfLines={1}
                >
                    {card.title}
                </Heading>
                <Text
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='143%'
                    color='black'
                    noOfLines={3}
                >
                    {card.desc}
                </Text>
            </Stack>
        </CardBody>
        <CardFooter p='12px' m='0'>
            <CategoryTag
                liked={card.liked}
                category={card.category}
                bookmark={card.bookmark}
                color='lime.150'
            />
        </CardFooter>
    </ChakraCard>
);
