import { CardProps } from '~/types/types';

import ham from '../assets/images/ham.png';
import rec from '../assets/images/image.jpg';
import kneli from '../assets/images/kneli.png';
import lapsha from '../assets/images/lapsha.png';
import tomYam from '../assets/images/tom-yam.png';

export const jusiestData: CardProps[] = [
    {
        title: 'Кнели со спагетти',
        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить.',
        category: 'Вторые блюда',
        bookmark: 85,
        liked: 152,
        image: kneli,
    },

    {
        title: 'Пряная ветчина по итальянски',
        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        bookmark: 2,
        liked: 1,
        image: ham,
        recomendations: {
            name: 'Юлия Высоцкая',
            imageURL: rec,
        },
    },
    {
        title: 'Лапша с курицей и шафраном',
        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        liked: 1,
        image: lapsha,
        recomendations: {
            name: 'Юлия Высоцкая',
            imageURL: rec,
        },
    },
    {
        title: 'Том-ям с капустой кимчи',
        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Национальные',
        bookmark: 124,
        liked: 324,
        image: tomYam,
    },
];
