import React from 'react';
import { Button, Card, Image, Typography } from 'antd';

import { push } from 'redux-first-history';
import Denied from '../../assets/images/Denied.svg';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import styles from '../../pages/registration-success/registration-success.module.css';

export const ResponseCard = () => {
    const dispatch = useAppDispatch();
    return (
        <Card
            bodyStyle={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
            className={styles.card}
            title={<Image src={Denied} />}
        >
            <Typography.Text className={styles.title}>Данные не сохранились</Typography.Text>
            <Typography.Text className={styles.subtitle}>
                Такой e-mail уже записан в системе. Попробуйте <br />
                зарегестрироваться по другому e-mail.
            </Typography.Text>
            <Button
                onClick={() => dispatch(push('/auth'))}
                data-test-id='registration-back-button'
                size='large'
                block
                type='primary'
                htmlType='submit'
            >
                Войти
            </Button>
        </Card>
    );
};
