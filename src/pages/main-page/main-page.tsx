import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import { Sider } from '@components/Sider';

import 'antd/dist/antd.css';
import './main-page.css';
import { Breadcrumbs } from '@components/BreadCrumbs/BreadCrumbs';

const routes = [
    {
        path: 'main',
        breadcrumbName: 'Главная',
    },
    {
        path: 'feedback',
        breadcrumbName: 'Отзывы пользователей',
    },
];

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
                    <Breadcrumbs routes={routes} />
                    <Outlet />
                </Layout>
            </Layout>
        </>
    );
};
