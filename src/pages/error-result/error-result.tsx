import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { Button, Result, Typography } from 'antd';
import React from 'react';

import { push } from 'redux-first-history';

import styles from '../error-login/error-login.module.css';

export const ResultError: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <>
            <Result
                className={styles.root}
                status='error'
                title={<Typography.Title level={2}>Данные не сохранились</Typography.Title>}
                subTitle='Что-то пошло не так и ваша регистрация не заврешилась. Попробуйте ещё раз.'
                extra={[
                    <Button
                        type='primary'
                        htmlType='submit'
                        key='console'
                        block
                        size='large'
                        data-test-id='registration-retry-button'
                        onClick={() => dispatch(push('/auth/registration'))}
                    >
                        Повторить
                    </Button>,
                ]}
            ></Result>
        </>
    );
};
