import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { Button, Result, Typography } from 'antd';
import React from 'react';

import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

import styles from './error-login.module.css';

export const LoginError: React.FC = () => {
    const location = useLocation();
    console.log(location.state); // TODO: use as props

    const dispatch = useAppDispatch();
    return (
        <Result
            className={styles.root}
            status='warning'
            title={<Typography.Title level={2}>Вход не выполнен</Typography.Title>}
            subTitle='Что-то пошло не так. Попробуйте ещё раз.'
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    key='console'
                    block
                    size='large'
                    data-test-id='login-retry-button'
                    onClick={() => dispatch(push('/auth'))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
