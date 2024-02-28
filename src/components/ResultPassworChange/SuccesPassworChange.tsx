import { Button, Result, Typography } from 'antd';
import { useEffect } from 'react';
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
            status='success'
            title={<Typography.Title level={2}>Пароль успешно изменен</Typography.Title>}
            subTitle='Теперь можно войти в аккаунт, используя свой логин и пароль'
            extra={[
                <Button
                    type='primary'
                    data-test-id='change-entry-button'
                    block
                    onClick={() => navigate('/auth')}
                >
                    Вход
                </Button>,
            ]}
        />
    );
};
