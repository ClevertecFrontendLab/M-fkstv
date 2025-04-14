import {
    Box,
    Button,
    Center,
    Grid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';

import { tabsData } from '~/data/tabsData';
import { vegansCardsData } from '~/data/vegansCardsData';

import { SectionCard } from '../SectionCard/SectionCard';

export const VeganTabs = () => (
    <Tabs mb={{ base: 8, md: 10 }}>
        <Box
            maxW='1020px'
            marginInline='auto'
            overflow='auto'
            sx={{
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            <TabList w='max-content'>
                {tabsData.map((item, index) => (
                    <Tab
                        key={index}
                        flexShrink={0}
                        color='lime.800'
                        _selected={{
                            color: 'lime.600',
                            borderColor: 'lime.600',
                        }}
                    >
                        {item}
                    </Tab>
                ))}
            </TabList>
        </Box>
        <TabPanels>
            {tabsData.map((_, index) => (
                <TabPanel key={index} flexShrink={0}>
                    <Grid gap={{ base: 3, md: 4 }} maxWidth='100%'>
                        {vegansCardsData.map((item, index) => (
                            <SectionCard {...item} key={index} />
                        ))}
                    </Grid>
                    <Center mt={4}>
                        <Button bg='lime.400'>Загрузить ещё</Button>
                    </Center>
                </TabPanel>
            ))}
        </TabPanels>
    </Tabs>
);
