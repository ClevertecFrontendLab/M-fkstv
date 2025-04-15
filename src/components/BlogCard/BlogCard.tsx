import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';

import { UserType } from '~/types/types';

import { User } from '../User/User';

type BlogCardProps = {
    text: string;
} & UserType;

export const BlogCard = ({ imageURL, name, email, text }: BlogCardProps) => (
    <Card>
        <CardHeader pb='8px'>
            <User imageURL={imageURL} name={name} email={email} />
        </CardHeader>
        <CardBody pt='0'>
            <Text noOfLines={3}>{text}</Text>
        </CardBody>
    </Card>
);
