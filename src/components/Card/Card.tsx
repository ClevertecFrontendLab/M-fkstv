import {
    Button,
    ButtonGroup,
    Card as ChakraCard,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Stack,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';

import Bookmark from '../../assets/icons/BsBookmarkHeart.svg';
import Liked from '../../assets/icons/BsEmojiHeartEyes.svg';
import FirstDishes from '../../assets/icons/firtsDishes.svg';
import Test from '../../assets/images/TestImg.png';

type CardProps = {
    bookmark?: number;
    liked?: number;
    title: string;
    text: string;
    badgeTitle: string;
};

export const Card = (card: CardProps) => (
    <ChakraCard
        variant='outlined'
        w='322px'
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
                src={Test}
            />
            <Stack p='16px 24px'>
                <Heading size='md' fontWeight={500} lineHeight='140%' letterSpacing='0.5px'>
                    {card.title}
                </Heading>
                <Text fontWeight={400} fontSize='14px' lineHeight='143%' color='black'>
                    {card.text}
                </Text>
            </Stack>
        </CardBody>
        <CardFooter p='0 16px 20px 16px' m='0'>
            <HStack w='100%' justify='space-between' p='10px 5px 0 5px'>
                <Tag colorScheme='lime' p='4px 8px' gap='8px' m='0'>
                    <Image src={FirstDishes} h='16px' w='16px' />
                    <TagLabel fontWeight={400} fontSize='14px' lineHeight='143%' color='black'>
                        {card.badgeTitle}
                    </TagLabel>
                </Tag>
                <ButtonGroup m='0'>
                    {card.bookmark && (
                        <Button
                            w='32px'
                            h='24px'
                            color='lime.600'
                            fontSize='12px'
                            fontWeight={600}
                            backgroundColor='#fff'
                            leftIcon={<Image src={Bookmark} />}
                        >
                            {card.bookmark}
                        </Button>
                    )}
                    {card.liked && (
                        <Button
                            w='32px'
                            h='24px'
                            color='lime.600'
                            fontSize='12px'
                            fontWeight={600}
                            backgroundColor='#fff'
                            leftIcon={<Image src={Liked} />}
                        >
                            {card.bookmark}
                        </Button>
                    )}
                </ButtonGroup>
            </HStack>
        </CardFooter>
    </ChakraCard>
);
