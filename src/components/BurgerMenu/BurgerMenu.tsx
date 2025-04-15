import { IconButton, Image } from '@chakra-ui/icons';

import BurgerIcon from '../../assets/icons/burger.svg';

export const BurgerMenu = () => (
    <IconButton
        aria-label='burger'
        variant='ghost'
        colorScheme='blackAlpha'
        icon={<Image src={BurgerIcon} />}
        isRound
    />
);
