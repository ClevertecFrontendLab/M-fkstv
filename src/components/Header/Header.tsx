import { Flex, Spacer, useMediaQuery } from '@chakra-ui/react';

import avatar from '../../assets/images/image.jpg';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { Logo } from '../Logo/Logo';
import { User } from '../User/User';

export const Header = () => {
    const [isMobile] = useMediaQuery('(max-width: 960px)');

    return (
        <Flex
            data-test-id='header'
            align='center'
            justify='center'
            p='16px'
            backgroundColor='lime.50'
            position={isMobile ? 'sticky' : 'relative'}
        >
            <Logo />
            <BreadCrumbs />
            <Spacer />
            <User
                imageURL={avatar}
                name='Екатерина Константинопольская'
                email='@bake_and_pie'
                margin='64px'
            />
        </Flex>
    );
};
