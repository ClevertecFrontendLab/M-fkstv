import React from 'react';

import { Layout } from 'antd';

import { Content } from '@components/Content';
import { Header } from '@components/Header';
import { Sider } from '@components/Sider';
import 'antd/dist/antd.css';
import './main-page.css';
import { Footer } from '@components/Footer';

export const MainPage: React.FC = () => {
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider />
                <Layout className='site-layout'>
                    <Header />
                    <Content />
                    <Footer />
                </Layout>
            </Layout>
        </>
    );
};
