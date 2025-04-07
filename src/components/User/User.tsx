import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import avatar from '../../assets/images/image.jpg';

export const User = () => (
    <Flex mr='40px'>
        <Avatar src={avatar} />
        <Box ml='12px'>
            <Text fontWeight={500} fontSize='18px' lineHeight='156%' color='#000000'>
                Екатерина Константинопольская
            </Text>
            <Text fontWeight={400} fontSize='14px' lineHeight='143%' color='rgba(0, 0, 0, 0.64)'>
                @bake_and_pie
            </Text>
        </Box>
    </Flex>
);
