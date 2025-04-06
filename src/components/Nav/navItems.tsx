import { Image } from '@chakra-ui/react';
import { ReactElement } from 'react';

import Desserts from '../../assets/icons/desserts.svg';
import Drinks from '../../assets/icons/drinks.svg';
import FirtsDishes from '../../assets/icons/firtsDishes.svg';
import Grill from '../../assets/icons/grill.svg';
import Healthy from '../../assets/icons/healthy.svg';
import Kids from '../../assets/icons/kids.svg';
import Nationals from '../../assets/icons/nationals.svg';
import Preservs from '../../assets/icons/preservs.svg';
import Salad from '../../assets/icons/salad.svg';
import SecondDishes from '../../assets/icons/secondDish.svg';
import Snacks from '../../assets/icons/snacks.svg';
import Souse from '../../assets/icons/souse.svg';
import Vegan from '../../assets/icons/vegan.svg';

type navItemProps = {
    icon: ReactElement;
    title: string;
    subs: string[];
};

export const navItems: navItemProps[] = [
    {
        icon: <Image src={Salad} />,
        title: 'Салаты',
        subs: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Тёплые салаты'],
    },
    {
        icon: <Image src={Snacks} />,
        title: 'Закуски',
        subs: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Тёплые закуски',
            'Бутерброды',
            'Фастфуд',
        ],
    },
    {
        icon: <Image src={FirtsDishes} />,
        title: 'Первые блюда',
        subs: ['Мясные супы', 'Овощные супы', 'Бульоны', 'Холодные супы', 'Диетические супы'],
    },
    {
        icon: <Image src={SecondDishes} />,
        title: 'Вторые блюда',
        subs: [
            'Мясные',
            'Рыбные',
            'Овощные',
            'Из птицы',
            'Из грибов',
            'Из субпродуктов',
            'На пару',
            'Пельмени, Вареники',
            'Мучные гарниры',
            'Овощные гарниры',
            'Пицца',
            'Суши',
        ],
    },
    {
        icon: <Image src={Desserts} />,
        title: 'Дессерты, выпечка',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Grill} />,
        title: 'Блюда на гриле',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Vegan} />,
        title: 'Веганская кухня',
        subs: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Дессерты',
            'Выпечка',
            'Сыроедчиские блюда',
            'Напитки',
        ],
    },
    {
        icon: <Image src={Kids} />,
        title: 'Детские блюда',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Healthy} />,
        title: 'Лечебное питание',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Nationals} />,
        title: 'Национальные',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Souse} />,
        title: 'Соусы',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Drinks} />,
        title: 'Напитки',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
    {
        icon: <Image src={Preservs} />,
        title: 'Заготовки',
        subs: ['Блюдо 1', 'Блюдо 2', 'Блюдо 3', 'Блюдо 4', 'Блюдо 5'],
    },
];
