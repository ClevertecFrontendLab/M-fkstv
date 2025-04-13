import { Button, ButtonGroup, HStack, Image, Tag, TagLabel } from '@chakra-ui/react';
import { FC } from 'react';

import Bookmark from '../../assets/icons/BsBookmarkHeart.svg';
import Liked from '../../assets/icons/BsEmojiHeartEyes.svg';
import FirstDishes from '../../assets/icons/firtsDishes.svg';

type CategoryTagProps = {
    category: string;
    bookmark?: number;
    liked?: number;
    color: string;
};

export const CategoryTag: FC<CategoryTagProps> = ({ category, liked, bookmark, color }) => (
    <HStack w='100%' justify='space-between'>
        <Tag bg={color} p='4px 8px' gap='8px' m='0'>
            <Image src={FirstDishes} h='16px' w='16px' />
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
