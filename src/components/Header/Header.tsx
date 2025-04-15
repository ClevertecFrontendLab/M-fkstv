import { Flex, Spacer, useMediaQuery } from '@chakra-ui/react';

import avatar from '../../assets/images/image.jpg';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/Logo';
import { User } from '../User/User';

export const Header = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <Flex
            align='center'
            justify='center'
            p='16px'
            backgroundColor='lime.50'
            position={isMobile ? 'sticky' : 'relative'}
        >
            <Logo />
            <BreadCrumbs />
            <Spacer />
            {!isMobile && (
                <User
                    imageURL={avatar}
                    name='Екатерина Константинопольская'
                    email='@bake_and_pie'
                    margin='64px'
                />
            )}
            {/* {isTablet && <StatsBlock />} */}
            {isMobile && <BurgerMenu />}
        </Flex>
    );
};
