import { Button, Result, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const SuccesPassworChange = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prevLoc = location.state?.prevLocation;
    useEffect(() => {
        if (prevLoc && prevLoc !== '/auth/change-password') {
            navigate('/auth');
        }
    }, []);

    return (
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
            status='error'
            title={<Typography.Title level={2}>Данные не сохранились</Typography.Title>}
            subTitle='Что-то пошло не так. Попробуйте ещё раз'
            extra={[
                <Button
                    type='primary'
                    block
                    data-test-id='change-retry-button'
                    onClick={() => navigate('/auth')}
                >
                    Повторить
                </Button>,
            ]}
        />
    );
};
