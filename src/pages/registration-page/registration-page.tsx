import { Tabs, TabsProps } from 'antd';

import { history } from '@redux/configure-store';

import { LoginForm, RegistrationForm } from '@components/Form';

import Logo from '../../assets/images/logo.svg';
import styles from './registration-page.module.css';

const tabsItems: TabsProps['items'] = [
    { label: 'Вход', key: 'auth', children: <LoginForm /> },
    { label: 'Регистрация', key: 'auth/registration', children: <RegistrationForm /> },
];

interface RegistrationPageProps {
    mode: string;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ mode }) => {
    const handletabChange = (key: string) => {
        history.push(`/${key}`);
    };

    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <img src={Logo} alt='Cleverfit' />
            </div>

            <Tabs
                className={styles.tabs}
                onChange={handletabChange}
                activeKey={mode}
                size='large'
                items={tabsItems}
            />
        </div>
    );
};
