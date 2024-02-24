import React from 'react';
import { Button, Card, Image, Typography } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import triangle from '../../assets/images/triangle.svg';
import styles from '../registration-success/registration-success.module.css';
import { push } from 'redux-first-history';

export const LoginError: React.FC = () => {
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
            title={<Image src={triangle} />}
        >
            <Typography.Text className={styles.title}>Вход не выполнен</Typography.Text>
            <Typography.Text className={styles.subtitle}>
                Что-то пошло не так. Попробуйте ещё раз
            </Typography.Text>
            <Button
                onClick={() => dispatch(push('/auth'))}
                data-test-id='registration-back-button'
                size='large'
                block
                type='primary'
                htmlType='submit'
            >
                Повторить
            </Button>
        </Card>
    );
};
