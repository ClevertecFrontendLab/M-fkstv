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
};

export const navItems: navItemProps[] = [
    {
        icon: <Image src={Salad} />,
        title: 'Салаты',
    },
    {
        icon: <Image src={Snacks} />,
        title: 'Закуски',
    },
    {
        icon: <Image src={FirtsDishes} />,
        title: 'Первые блюда',
    },
    {
        icon: <Image src={SecondDishes} />,
        title: 'Вторые блюда',
    },
    {
        icon: <Image src={Desserts} />,
        title: 'Дессерты, выпечка',
    },
    {
        icon: <Image src={Grill} />,
        title: 'Блюда на гриле',
    },
    {
        icon: <Image src={Vegan} />,
        title: 'Веганская кухня',
    },
    {
        icon: <Image src={Kids} />,
        title: 'Детскме блюда',
    },
    {
        icon: <Image src={Healthy} />,
        title: 'Лечебное питание',
    },
    {
        icon: <Image src={Nationals} />,
        title: 'Национальные',
    },
    {
        icon: <Image src={Souse} />,
        title: 'Соусы',
    },
    {
        icon: <Image src={Drinks} />,
        title: 'Напитки',
    },
    {
        icon: <Image src={Preservs} />,
        title: 'Заготовки',
    },
];
