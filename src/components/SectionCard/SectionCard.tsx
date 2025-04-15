import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/types';

import Bookmark from '../../assets/icons/BsBookmarkHeart.svg';
import { CategoryTag } from '../CategoryTag/CategoryTag';
import { RecommendationTag } from '../RecomendationTag/RecomendationTag';

export const SectionCard: FC<CardProps> = (item) => (
    <Card
        direction='row'
        variant='outline'
        overflow='hidden'
        _hover={{
            boxShadow:
                '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        }}
    >
        <Box
            position='absolute'
            bottom={2}
            left={2}
            display={{ base: 'none', md: 'block' }}
            maxW={{ base: '158px', md: 'calc(50% - 16px)' }}
        >
            {item.recomendations && <RecommendationTag {...item.recomendations} />}
        </Box>
        <Image
            src={item.image}
            alt={item.title}
            minW={{ md: '346px', base: '158px' }}
            objectFit='cover'
        />
        <Stack w='100%' p='20px 24px' spacing='24px'>
            <CardHeader p='0'>
                <HStack justifyContent='space-between' paddingInline='0'>
                    <Box display={{ base: 'none', md: 'block' }} w='100%'>
                        <CategoryTag {...item} color='lime.50' />
                    </Box>
                </HStack>
            </CardHeader>
            <CardBody p='0'>
                <Heading
                    fontSize={{ base: 'md', md: '20px' }}
                    noOfLines={{ base: 2, md: 1 }}
                    mb={2}
                    fontWeight={500}
                >
                    {item.title}
                </Heading>
                <Text
                    noOfLines={3}
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='143%'
                    display={{ base: 'none', lg: 'flex' }}
                >
                    {item.desc}
                </Text>
            </CardBody>
            <CardFooter p='0'>
                <HStack
                    justifyContent='flex-end'
                    width='100%'
                    spacing={{ base: 3, md: 2 }}
                    flexWrap='wrap'
                >
                    <IconButton
                        size={{ base: 'xs', md: 'sm' }}
                        aria-label='save'
                        icon={<Image src={Bookmark} />}
                        variant='outline'
                        display={{ base: 'flex', md: 'none' }}
                        w={6}
                    />
                    <Button
                        variant='outline'
                        size={{ base: 'xs', md: 'sm' }}
                        leftIcon={<Image src={Bookmark} />}
                        color='blackAlpha.800'
                        display={{ base: 'none', md: 'flex' }}
                    >
                        Сохранить
                    </Button>
                    <Button bg='black' color='white' size={{ base: 'xs', md: 'sm' }}>
                        Готовить
                    </Button>
                </HStack>
            </CardFooter>
        </Stack>
    </Card>
);
