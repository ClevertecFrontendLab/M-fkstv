import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { Button, Result, Typography } from 'antd';
import React from 'react';

import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

export const LoginError: React.FC = () => {
    const location = useLocation();
    console.log(location.state);

    const dispatch = useAppDispatch();
    return (
        // <Card
        //     bodyStyle={{
        //         padding: 0,
        //         display: 'flex',
        //         flexDirection: 'column',
        //         width: '100%',
        //     }}
        //     className={styles.card}
        //     title={<Image src={triangle} />}
        // >
        //     <Typography.Text className={styles.title}>Вход не выполнен</Typography.Text>
        //     <Typography.Text className={styles.subtitle}>
        //         Что-то пошло не так. Попробуйте ещё раз
        //     </Typography.Text>
        //     <Button
        //         onClick={() => dispatch(push('/auth'))}
        //         data-test-id='login-retry-button'
        //         size='large'
        //         block
        //         type='primary'
        //         htmlType='submit'
        //     >
        //         Повторить
        //     </Button>
        // </Card>

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
