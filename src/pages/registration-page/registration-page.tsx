import Logo from '../../assets/images/logo.svg';

import { LoginForm } from '@components/LoginForm';
import { RegistrationForm } from '@components/RegistrationForm';
import { Menu, Tabs } from 'antd';
import styles from './registration-page.module.css';
import { useNavigate } from 'react-router-dom';

export const RegistrationPage: React.FC = () => {
    const tabsItems = [
        { label: 'Вход', key: 'login', children: <LoginForm /> },
        { label: 'Регистрация', key: 'auth', children: <RegistrationForm /> },
    ];

    const navigate = useNavigate();

    const onchange = (e: string) => {
        // e - /auth or /login
        // navigate(e);
    };

    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div className={styles.logo}>
                    <img src={Logo} alt='Cleverfit' />
                </div>
                <Tabs className={styles.tabs} onChange={onchange} size='large' items={tabsItems} />
            </div>
        </div>
    );
};
