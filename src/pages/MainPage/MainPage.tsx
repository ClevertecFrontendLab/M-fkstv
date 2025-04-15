import { Divider, VStack } from '@chakra-ui/react';

import { Blogs } from '~/components/Blogs/Blogs';
import { HeadingSection } from '~/components/HedingSection/HeadingSection';
import { Jusiest } from '~/components/Jusiest/Jusiest';
import { RecomendationSection } from '~/components/RecomendationSection/RecomendationSection';
import { Slider } from '~/components/Slider/Slider';

export const MainPage = () => (
    <VStack width='100% ' spacing='16px' paddingTop='32px' paddingBottom='24px'>
        <HeadingSection title='Приятного аппетита' />
        <Slider />
        <Jusiest />
        <Blogs />
        <Divider />
        <RecomendationSection
            title='Веганская кухня'
            desc='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
    </VStack>
);
