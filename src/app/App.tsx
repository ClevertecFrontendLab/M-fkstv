import './App.css';

import { Grid, GridItem } from '@chakra-ui/react';

import { Aside } from '~/components/Aside/Aside';
import { Header } from '~/components/Header/Header';
import { Main } from '~/components/Main/Main';
import { Nav } from '~/components/Nav/Nav';

// import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Grid
            templateAreas={{
                md: `"header header header"
            "nav main aside"    
            `,
                base: `"header
                        main
                        footer"`,
            }}
        >
            <GridItem area='header' w='100%'>
                <Header />
            </GridItem>

            <GridItem area='nav'>
                <Nav />
            </GridItem>
            <GridItem area='main'>
                <Main />
            </GridItem>
            <GridItem area='aside'>
                <Aside />
            </GridItem>
            {/* <GridItem area='footer'>Footer</GridItem> */}
        </Grid>
    );
}

export default App;
