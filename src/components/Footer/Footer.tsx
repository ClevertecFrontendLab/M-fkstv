import { Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

import Home from '../../assets/icons/home.svg';
import Search from '../../assets/icons/search.svg';
import Edit from '../../assets/icons/write.svg';
import Avatar from '../../assets/images/image.jpg';

const footerData = [
    {
        title: 'Главная',
        icon: Home,
        isActive: true,
    },
    {
        title: 'Поиск',
        icon: Search,
        isActive: false,
    },
    {
        title: 'Записать',
        icon: Edit,
        isActive: false,
    },
    {
        title: 'Мой профиль',
        icon: Avatar,
        isActive: false,
    },
];

export const Footer = () => (
    <Grid
        templateColumns='repeat(4, 1fr)'
        height='100%'
        templateRows='1fr'
        bg='lime.50'
        data-test-id='footer'
    >
        {footerData.map((item, index) => (
            <GridItem key={index}>
                <Stack align='center' direction='column' spacing={1} as={Link} to='/'>
                    <Image src={item.icon} w='16px' h='16px' />

                    <Text fontSize='xs' lineHeight={4}>
                        {item.title}
                    </Text>
                </Stack>
            </GridItem>
        ))}
    </Grid>
);
