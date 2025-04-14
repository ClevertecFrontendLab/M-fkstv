import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Image,
    Link,
    List,
    ListItem,
    Spacer,
    Stack,
    Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router';

import LeftIcon from '../../assets/icons/left-icon.svg';
import { navItems } from './navItems.tsx';

export const Nav = () => (
    <Flex direction='column' hideBelow='md'>
        <Accordion
            borderBottomRightRadius='12px'
            _hover={{
                boxShadow:
                    '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
            }}
            p='34px 0 10px 10px'
            allowToggle
        >
            {navItems.map((i) => (
                <AccordionItem
                    key={i.title}
                    borderTopWidth={0}
                    _last={{
                        borderBottomWidth: 0,
                    }}
                >
                    <NavLink to={i.path}>
                        <AccordionButton
                            p='12px 8px'
                            fontWeight={500}
                            _expanded={{
                                bg: 'lime.100',
                                fontWeight: 700,
                                lineHeight: '150%',
                            }}
                            _hover={{
                                backgroundColor: 'lime.50',
                            }}
                        >
                            {i.icon}
                            <Box as='span' flex='1' textAlign='left' ml='12px'>
                                {i.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </NavLink>

                    <AccordionPanel pb={4}>
                        <List spacing={2}>
                            {i.subs.map((sub, i) => (
                                <ListItem
                                    position='relative'
                                    key={i}
                                    p='12px 8px'
                                    minWidth='230px'
                                    height='48px'
                                    _hover={{
                                        fontWeight: 700,
                                        lineHeight: '150%',
                                        backgroundColor: 'lime.50',
                                        _before: {
                                            width: '8px',
                                            left: '-8px',
                                        },
                                    }}
                                    _before={{
                                        position: 'absolute',
                                        content: '""',
                                        height: '100%',
                                        width: '1px',
                                        left: '0',
                                        top: '0',
                                        background: 'lime.100',
                                    }}
                                >
                                    <Link>
                                        <Text noOfLines={1}>{sub}</Text>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
        <Spacer />
        <Stack p={6}>
            <Text color='blackAlpha.400' fontSize='12px' lineHeight='133%' fontWeight={500}>
                Версия программы 03.25
            </Text>
            <Text color='blackAlpha.700' fontSize='12px' lineHeight='133%' fontWeight={400}>
                Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
            </Text>
            <Stack flexWrap='wrap' alignItems='flex-start'>
                <Button
                    leftIcon={<Image src={LeftIcon} alt='Выйти' w='12px' h='12px' />}
                    variant='ghost'
                    pl='0px'
                >
                    Выйти
                </Button>
            </Stack>
        </Stack>
    </Flex>
);
