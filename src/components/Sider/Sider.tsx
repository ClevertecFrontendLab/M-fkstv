import { Button, Divider, Layout, Menu } from 'antd';
import { useState } from 'react';

import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';

import styles from './Sider.module.css';

import Exit from '../../assets/images/exit.svg';
import Logo from '../../assets/images/logo.svg';
import MobileLogo from '../../assets/images/mobileLogo.svg';

import { useIsMObile } from '@hooks/isMobile';
import { history } from '@redux/configure-store';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { removeUser } from '@redux/slices/user.slice';

export const Sider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useAppDispatch();
    const { isMobile } = useIsMObile();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(removeUser());
        history.push('/auth');
    };

    return (
        <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={isMobile ? 0 : 64}
            defaultCollapsed={isMobile}
            width={isMobile ? 106 : 210}
            style={{
                zIndex: 99,
                position: isMobile ? 'fixed' : 'relative',
                height: isMobile ? '100vh' : '',
            }}
        >
            <div
                className={
                    collapsed
                        ? styles.mobileLogo
                        : !collapsed && isMobile
                        ? styles.mobileLogo
                        : styles.logo
                }
            >
                <a href='#'>
                    <img
                        src={
                            isMobile && !collapsed
                                ? MobileLogo
                                : collapsed && !isMobile
                                ? MobileLogo
                                : Logo
                        }
                        alt='logo'
                    />
                </a>
            </div>
            <div className={styles.trigger__wrapper}>
                <div
                    className={styles.trigger}
                    data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
            </div>
            <div className={styles.nav}>
                <Menu
                    mode='vertical'
                    defaultSelectedKeys={['1']}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                    }}
                    items={[
                        {
                            key: '1',
                            icon: !isMobile && (
                                <CalendarTwoTone twoToneColor={['#061178', '#061178']} />
                            ),
                            label: 'Календарь',
                        },
                        {
                            key: '2',
                            icon: !isMobile && <HeartFilled style={{ color: '#061178' }} />,
                            label: 'Тренировки',
                        },
                        {
                            key: '3',
                            icon: !isMobile && <TrophyFilled style={{ color: '#061178' }} />,
                            label: 'Достижения ',
                        },
                        {
                            key: '4',
                            icon: !isMobile && <IdcardOutlined style={{ color: '#061178' }} />,
                            label: 'Профиль',
                        },
                    ]}
                />

                <div className={styles.exit}>
                    <Divider
                        style={{
                            margin: '0',
                        }}
                    />
                    <Button onClick={handleLogOut}>
                        <img src={Exit} alt='Выйти' />
                        {!collapsed && <span>Выход</span>}
                    </Button>
                </div>
            </div>
        </Layout.Sider>
    );
};
