import { Button, ButtonGroup, HStack, Image, Tag, TagLabel } from '@chakra-ui/react';
import { FC } from 'react';

import Bookmark from '../../assets/icons/BsBookmarkHeart.svg';
import Liked from '../../assets/icons/BsEmojiHeartEyes.svg';
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

type CategoryTagProps = {
    category: string;
    bookmark?: number;
    liked?: number;
    color: string;
};

const test: Record<string, string> = {
    ['Салаты']: Salad,
    ['Закуски']: Snacks,
    ['Первые блюда']: FirtsDishes,
    ['Вторые блюда']: SecondDishes,
    ['Десерты, выпечка']: Desserts,
    ['Блюда на гриле']: Grill,
    ['Веганская кухня']: Vegan,
    ['Детские блюда']: Kids,
    ['Лечебное питание']: Healthy,
    ['Национальные']: Nationals,
    ['Соусы']: Souse,
    ['Напитки']: Drinks,
    ['Домашние заготовки']: Preservs,
};

export const CategoryTag: FC<CategoryTagProps> = ({ category, liked, bookmark, color }) => (
    <HStack w='100%' justify='space-between'>
        <Tag bg={color} p='4px 8px' gap='8px' m='0'>
            <Image src={test[category]} h='16px' w='16px' />
            <TagLabel fontWeight={400} fontSize='14px' lineHeight='143%' color='black'>
                {category}
            </TagLabel>
        </Tag>
        <ButtonGroup m='0'>
            {bookmark && (
                <Button
                    w='32px'
                    h='24px'
                    color='lime.600'
                    fontSize='12px'
                    fontWeight={600}
                    backgroundColor='#fff'
                    paddingRight='0'
                    leftIcon={<Image src={Bookmark} />}
                >
                    {bookmark}
                </Button>
            )}
            {liked && (
                <Button
                    w='32px'
                    h='24px'
                    color='lime.600'
                    fontSize='12px'
                    fontWeight={600}
                    backgroundColor='#fff'
                    paddingRight='0'
                    leftIcon={<Image src={Liked} />}
                >
                    {liked}
                </Button>
            )}
        </ButtonGroup>
    </HStack>
);
