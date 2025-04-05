import './Header.css';

import { Flex, Spacer, useMediaQuery } from '@chakra-ui/react';

import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { Logo } from '../Logo/Logo';
import { User } from '../User/User';

export const Header = () => {
    const [isMobile] = useMediaQuery('(max-width: 960px)');

    return (
        <>
            <Flex
                data-test-id='header'
                align='center'
                justify='center'
                w='100%'
                h='80px'
                p='16px'
                backgroundColor=' #ffffd3'
                position={isMobile ? 'sticky' : 'relative'}
            >
                <Logo />
                <BreadCrumbs />
                <Spacer />
                <User />
            </Flex>
        </>
    );
};
