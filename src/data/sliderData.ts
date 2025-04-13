import { CardProps } from '~/types/types';

import kotleta from '../assets/images/kotleta.png';
import oladji from '../assets/images/oladji.png';
import salad from '../assets/images/salad.png';
import solianka from '../assets/images/solianka.png';

export const sliderData: CardProps[] = [
    {
        title: 'Солянка с грибами',
        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить.',
        category: 'Первые блюда',
        bookmark: 1,
        image: solianka,
    },

    {
        title: 'Капустные котлеты',
        desc: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными.',
        category: 'Веганская кухня',
        bookmark: 2,
        liked: 1,
        image: kotleta,
    },
    {
        title: 'Оладьи на кефире "Пышные"',
        desc: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак ',
        category: 'Десерты, выпечка',
        liked: 1,
        image: oladji,
    },
    {
        title: 'Салат "Здоровье"',
        desc: 'Сельдерей очень полезен для здоровья, пора набираться витаминов.',
        category: 'Салаты',
        bookmark: 2,
        liked: 1,
        image: salad,
    },
];
