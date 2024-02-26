import { Button, Result, Typography } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

export const ErrorResponse: React.FC = () => {
    const dispatch = useAppDispatch();

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
            title={<Typography.Title level={2}>Такой email не зарегестрирован</Typography.Title>}
            subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail'
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    key='console'
                    block
                    size='large'
                    data-test-id='check-retry-button'
                    onClick={() => dispatch(push('/auth'))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
