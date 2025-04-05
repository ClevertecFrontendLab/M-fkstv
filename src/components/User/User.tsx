import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import avatar from '../../assets/images/image.jpg';

export const User = () => (
    <Flex mr='40px'>
        <Avatar src={avatar} />
        <Box ml='12px'>
            <Text fontWeight='semibold'>Екатерина Константинопольская</Text>
            <Text fontSize='sm'>@bake_and_pie</Text>
        </Box>
    </Flex>
);
