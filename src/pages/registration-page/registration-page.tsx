import { Checkbox, Form, Input } from 'antd';

import Logo from '../../assets/images/logo.svg';

import { Tabs } from 'antd';
import styles from './registration-page.module.css';
import { RegistrationForm } from '@components/RegistrationForm';
import { AuthForm } from '@components/AuthForm';

export const RegistrationPage: React.FC = () => {
    const tabsItems = [
        {
            label: 'Вход',
            key: 'enter',
            children: <RegistrationForm />,
        },
        { label: 'Регистрация', key: 'auth', children: <AuthForm /> },
    ];

    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div className={styles.logo}>
                    <img src={Logo} alt='Cleverfit' />
                </div>
                <Tabs items={tabsItems} />
            </div>
        </div>
    );
};
