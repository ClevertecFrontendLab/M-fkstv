import { Button, Heading, HStack, Image } from '@chakra-ui/react';
import { FC } from 'react';

type ShortCardProps = {
    title: string;
    image: string;
};

export const ShortCard: FC<ShortCardProps> = ({ title, image }) => (
    <HStack
        border='1px solid rgba(0, 0, 0, 0.08)'
        padding='12px'
        borderRadius='8px'
        alignItems='center'
        spacing='8px'
    >
        <Image src={image} />
        <Heading
            fontSize='18px'
            lineHeight='156%'
            noOfLines={1}
            fontWeight={500}
            flexGrow={1}
            wordBreak='break-all'
        >
            {title}
        </Heading>
        <Button variant='outline' color='lime.600' borderColor='lime.600' size='xs' flexShrink={0}>
            Готовить
        </Button>
    </HStack>
);
