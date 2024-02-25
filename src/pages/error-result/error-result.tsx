import React from 'react';
import { Button, Card, Image, Result, Typography } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';

import { push } from 'redux-first-history';

export const ResultError: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <>
            <Result
                style={{
                    backgroundColor: 'white',
                    zIndex: 50,

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '64px 85.5px',
                    width: 540,
                }}
                status='warning'
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
