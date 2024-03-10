import { useEffect, useState } from 'react';
import { history } from '@redux/configure-store';
import { Link } from 'react-router-dom';
import { push } from 'redux-first-history';
import { Button, Divider, Layout, Menu } from 'antd';
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

import { FeedbackServerError } from '@components/Feedback';
import { Loader } from '@components/Loader';

import { PATH } from '@constants/endpoints';
import { useIsMObile } from '@hooks/isMobile';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';

import { useLazyGetTrainingsListQuery, useLazyGetTrainingsQuery } from '@redux/api/trainingApi';
import { removeUser } from '@redux/slices/user.slice';

export const Sider = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const { isMobile } = useIsMObile();
    const [trainingTrigger, { isError: trainError, isFetching, isLoading, isSuccess }] =
        useLazyGetTrainingsQuery();
    const [trainingListTrigger] = useLazyGetTrainingsListQuery();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(removeUser());
        history.push(PATH.AUTH);
    };

    const handelGoToCalendar = async () => {
        await trainingTrigger();
        await trainingListTrigger();
        dispatch(push(PATH.CALENDAR));
    };

    if (isLoading || isFetching) return <Loader />;
    return (
        <>
            {trainError && (
                <FeedbackServerError
                    open={openModal}
                    onCancel={() => setOpenModal(false)}
                    onSubmit={() => setOpenModal(false)}
                />
            )}
            <Layout.Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={isMobile ? 0 : 64}
                defaultCollapsed={isMobile}
                width={isMobile ? 106 : 210}
                style={{
                    position: isMobile ? 'fixed' : 'relative',
                    height: isMobile ? '100vh' : '',
                    boxShadow: 'box-shadow: 0px 2px 8px 0px #00000026',
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
                    <Link to={PATH.MAIN}>
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
                    </Link>
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
                        mode='inline'
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
                                onClick: handelGoToCalendar,
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
        </>
    );
};
