import { Layout } from 'antd';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { Content } from '@components/Content';

export const RootLayout = () => {
    return (
        <Layout className='site-layout'>
            <Header />
            <Content />
            <Footer />
        </Layout>
    );
};
