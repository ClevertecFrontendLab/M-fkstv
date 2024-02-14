import { SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Typography } from 'antd';

import styles from './Header.module.css';

import { useIsMObile } from '@hooks/isMobile';

export const Header = () => {
    const { isMobile, isTablet } = useIsMObile();

    return (
        <Layout.Header style={{ padding: '14px 24px', height: 'auto', backgroundColor: '#f0f5ff' }}>
            <Breadcrumb className={styles.breadcrumb}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.wrapper}>
                <Typography.Title className={styles.title}>
                    Приветствуем тебя в CleverFit &mdash; приложении,
                    <br />
                    которое поможет тебе добиться своей мечты!
                </Typography.Title>
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
