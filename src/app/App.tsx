import './App.css';

import { Header } from '~/components/Header/Header';
import { Nav } from '~/components/Nav/Nav';

// import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <Header />
            <Nav />
        </>
    );
}

export default App;
