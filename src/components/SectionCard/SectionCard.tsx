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

export const SectionCard: FC<CardProps> = (item) => (
    <Card direction='row' variant='outline' overflow='hidden'>
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
                    display={{ base: 'box ', md: 'box' }}
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
