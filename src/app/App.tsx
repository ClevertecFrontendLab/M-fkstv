import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/components/Aside/Aside';
import { Header } from '~/components/Header/Header';
import { Nav } from '~/components/Nav/Nav';

// import { useGetPostsQuery } from '~/query/services/posts.ts';
import styles from './app.styles.module.css';

function App() {
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Grid
            position='relative'
            gridTemplateRows='80px 1fr'
            templateAreas={{
                md: `"header header header"
            "nav main aside"    
            `,
                base: `"header
                        main
                        footer"`,
            }}
            gridTemplateColumns={{
                md: '256px 1fr 256px',
            }}
        >
            <GridItem area='header' w='100%' position='fixed' zIndex='2'>
                <Header />
            </GridItem>

            <GridItem area='nav' className={styles.nav}>
                <Nav />
            </GridItem>
            <GridItem
                area='main'
                overflow='hidden'
                paddingInline='24px'
                top='80px'
                position='relative'
            >
                <Outlet />
            </GridItem>
            <GridItem area='aside'>
                <Aside />
            </GridItem>
            {/* <GridItem area='footer'>Footer</GridItem> */}
        </Grid>
    );
}

export default App;
