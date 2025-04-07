import { Button, Flex, IconButton, Image, Spacer, Text, VStack } from '@chakra-ui/react';

import Bookmark from '../../assets/icons/BsBookmarkHeart.svg';
import Liked from '../../assets/icons/BsEmojiHeartEyes.svg';
import Shared from '../../assets/icons/BsPeopleFill.svg';
import GetRecipe from '../../assets/icons/getRecipe.svg';

export const Aside = () => (
    <Flex direction='column' h='100%'>
        <VStack spacing='24px'>
            <Button
                variant='ghost'
                p='8px 16px'
                backgroundColor='white'
                leftIcon={<Image src={Bookmark} alt='Подписаться' w='16px' h='16px' />}
            >
                <Text color='lime.600'>185</Text>
            </Button>
            <Button
                variant='ghost'
                p='8px 16px'
                backgroundColor='white'
                leftIcon={<Image src={Shared} alt='Поделиться' w='16px' h='16px' />}
            >
                <Text color='lime.600'>589</Text>
            </Button>
            <Button
                variant='ghost'
                p='8px 16px'
                backgroundColor='white'
                leftIcon={<Image src={Liked} alt='Нравится' w='16px' h='16px' />}
            >
                <Text color='lime.600'>587</Text>
            </Button>
        </VStack>
        <Spacer />
        <VStack mb='52px'>
            <IconButton
                variant='ghost'
                _hover={{
                    background: 'none',
                }}
                backgroundColor='red'
                zIndex={1}
                position='relative'
                background='white'
                borderRadius='50px'
                fontSize='48px'
                mb='12px'
                aria-label='записать рецепт'
                icon={<Image src={GetRecipe} />}
                _after={{
                    position: 'absolute',
                    content: '""',
                    zIndex: '-1',
                    width: '100px',
                    height: '100px',
                    background:
                        'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
                }}
            ></IconButton>

            <Text
                fontWeight={400}
                fontSize='12px'
                lineHeight='133%'
                textAlign='center'
                color='rgba(0, 0, 0, 0.64)'
            >
                Записать рецепт
            </Text>
        </VStack>
    </Flex>
);
