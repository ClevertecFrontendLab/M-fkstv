import { SettingOutlined } from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';

import styles from './Header.module.css';

import { useIsMObile } from '@hooks/isMobile';
import { useLocation } from 'react-router-dom';
import { PATH } from '@constants/endpoints';
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

export const Header = () => {
    const { isMobile, isTablet } = useIsMObile();
    const location = useLocation();
    const isMain = location.pathname === PATH.MAIN;

    return (
        <Layout.Header style={{ padding: '14px 24px', height: 'auto', backgroundColor: '#f0f5ff' }}>
            <Breadcrumbs routes={routes} />
            <div className={styles.wrapper}>
                {isMain && (
                    <Typography.Title className={styles.title}>
                        Приветствуем тебя в CleverFit &mdash; приложении,
                        <br />
                        которое поможет тебе добиться своей мечты!
                    </Typography.Title>
                )}
                <Button
                    shape={isMobile ? 'circle' : 'default'}
                    className={styles.button}
                    icon={isTablet && !isMobile ? '' : <SettingOutlined />}
                >
                    {!isMobile && 'Настройки'}
                </Button>
            </div>
        </Layout.Header>
    );
};
