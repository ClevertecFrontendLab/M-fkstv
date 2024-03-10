import { Button, Divider, Layout } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { PATH } from '@constants/endpoints';

export const Footer = () => {
    return (
        <Layout.Footer
            style={{
                backgroundColor: 'transparent',
            }}
            className={styles.footer}
        >
            <Link
                to={localStorage.getItem('token') ? PATH.FEEDBAKS : PATH.AUTH}
                className={styles.reviews}
                data-test-id='see-reviews'
            >
                Смотреть отзывы
            </Link>
            <div className={styles.apps}>
                <div className={styles.top}>
                    <Button>
                        <p>Скачать на телефон</p>
                        <span>Доступно в PRO-тарифе</span>
                    </Button>
                </div>
                <Divider
                    style={{
                        margin: 0,
                    }}
                />
                <div className={styles.body}>
                    <Button icon={<AndroidFilled />}>Android OS</Button>
                    <Button icon={<AppleFilled />}>Apple iOS</Button>
                </div>
            </div>
        </Layout.Footer>
    );
};
