import { Avatar, Tag, TagLabel } from '@chakra-ui/react';
import { FC } from 'react';

type TagProps = {
    name: string;
    imageURL: string;
};

export const RecommendationTag: FC<TagProps> = ({ name, imageURL }) => (
    <Tag size='md' bg='lime.150'>
        <Avatar size='2xs' src={imageURL} name={`${name}`} />
        <TagLabel ml={2}>{`${name}`} рекомендует</TagLabel>
    </Tag>
);
