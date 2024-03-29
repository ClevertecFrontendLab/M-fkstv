import { Button, Divider, Layout } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <Layout.Footer className={styles.footer}>
            {/* <Button type='link' className={styles.reviews}>
                Смотреть отзывы
            </Button> */}

            <Link
                to={localStorage.getItem('token') ? '/feedbacks' : '/auth'}
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
