import { Button, Center, Grid, VStack } from '@chakra-ui/react';

import { HeadingSection } from '~/components/HedingSection/HeadingSection';
import { RecomendationSection } from '~/components/RecomendationSection/RecomendationSection';
import { SectionCard } from '~/components/SectionCard/SectionCard';
import { jusiestData } from '~/data/jusiestData';

export const JusiestPage = () => (
    <VStack>
        <HeadingSection title='Самое сочное' />
        <Grid gap='16px' mb='32px'>
            {jusiestData.map((item, index) => (
                <SectionCard key={index} {...item} />
            ))}
            <Center>
                <Button bg='lime.400'>Загрузить ещё</Button>
            </Center>
        </Grid>
        <RecomendationSection
            title='Веганская кухня'
            desc='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
    </VStack>
);
