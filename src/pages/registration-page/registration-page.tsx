import Logo from '../../assets/images/logo.svg';

import { LoginForm, RegistrationForm } from '@components/Form';
import { Tabs, TabsProps } from 'antd';
import styles from './registration-page.module.css';
import { history } from '@redux/configure-store';

export const RegistrationPage: React.FC = () => {
    // const TabContent: React.FC<{ isRegistration: boolean }> = ({ isRegistration }) => {
    //     return isRegistration ? <LoginForm /> : <RegistrationForm />;
    // };
    const tabsItems: TabsProps['items'] = [
        { label: 'Вход', key: 'auth', children: <LoginForm /> },
        { label: 'Регистрация', key: 'auth/registration', children: <RegistrationForm /> },
    ];

    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div className={styles.logo}>
                    <img src={Logo} alt='Cleverfit' />
                </div>
                <Tabs
                    className={styles.tabs}
                    onChange={(key) => {
                        history.push(`/${key}`);
                    }}
                    defaultActiveKey='auth'
                    size='large'
                    items={tabsItems}
                />
            </div>
        </div>
    );
};
