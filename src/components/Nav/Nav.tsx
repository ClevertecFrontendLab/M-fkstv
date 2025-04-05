import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from '@chakra-ui/react';

import { navItems } from './navItems.js';

export const Nav = () => (
    <Flex
        direction='column'
        w={250}
        p={4}
        boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
    >
        {navItems.map((i) => (
            <Accordion key={i.title} allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        {i.icon}
                        <Box as='span' flex='1' textAlign='left' ml='4px'>
                            {i.title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>Lorem ipsum</AccordionPanel>
                </AccordionItem>
            </Accordion>
        ))}
    </Flex>
);
