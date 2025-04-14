import { VStack } from '@chakra-ui/react';

import { HeadingSection } from '~/components/HedingSection/HeadingSection';
import { RecomendationSection } from '~/components/RecomendationSection/RecomendationSection';
import { VeganTabs } from '~/components/Tabs/Tabs';

export const VeganPage = () => (
    <VStack>
        <HeadingSection title='Веганская кухня' />
        <VeganTabs />

        <RecomendationSection
            title='Десерты, выпечка'
            desc='Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб — рецепты изделий из теста многообразны и невероятно популярны.'
        />
    </VStack>
);
