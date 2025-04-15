import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { UserType } from '~/types/types';

export const User: FC<UserType> = ({ imageURL, name, email, margin }) => (
    <Flex mr={margin ? margin : '0'}>
        <Avatar src={imageURL} />
        <Box ml='12px'>
            <Text
                fontWeight={500}
                fontSize='18px'
                lineHeight='156%'
                color='#000000'
                noOfLines={1}
                wordBreak='break-all'
            >
                {name}
            </Text>
            <Text fontWeight={400} fontSize='14px' lineHeight='143%' color='rgba(0, 0, 0, 0.64)'>
                {email}
            </Text>
        </Box>
    </Flex>
);
