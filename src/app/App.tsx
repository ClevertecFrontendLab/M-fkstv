import './App.css';

import { Grid, GridItem } from '@chakra-ui/react';

import { Aside } from '~/components/Aside/Aside';
import { Header } from '~/components/Header/Header';
import { Nav } from '~/components/Nav/Nav';

// import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Grid
            templateAreas={`"header header header"
            "nav main aside"    
            `}
            gridTemplateRows='80px 1fr'
            gridTemplateColumns='256px 1fr 208px'
        >
            <GridItem area='header'>
                <Header />
            </GridItem>

            <GridItem area='nav'>
                <Nav />
            </GridItem>
            <GridItem area='main'>Main</GridItem>
            <GridItem area='aside'>
                <Aside />
            </GridItem>
            {/* <GridItem area='footer'>Footer</GridItem> */}
        </Grid>
    );
}

export default App;
