import Logo from '../../assets/images/logo.svg';

import { LoginForm } from '@components/LoginForm';
import { RegistrationForm } from '@components/RegistrationForm';
import { Tabs } from 'antd';
import styles from './registration-page.module.css';

export const RegistrationPage: React.FC = () => {
    const tabsItems = [
        { label: 'Вход', key: 'enter', children: <LoginForm /> },
        { label: 'Регистрация', key: 'auth', children: <RegistrationForm /> },
    ];

    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div className={styles.logo}>
                    <img src={Logo} alt='Cleverfit' />
                </div>
                <Tabs
                    onChange={(key) => {
                        history.pushState(key, `/${key}`);
                    }}
                    className={styles.ant_tabs}
                    size='large'
                    items={tabsItems}
                />
            </div>
        </div>
    );
};
