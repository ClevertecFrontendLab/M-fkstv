import { Button, Result, Typography } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { useLocation } from 'react-router-dom';

const title: any = {
    '404': 'Такой email не зарегестрирован',
    '409': 'Данные не сохранились',
};

const subtitle: any = {
    '404': 'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail',
    '409': 'Такой e-mail уже записан в системе. Попробуйте зарегестрироваться по другому e-mail.',
};

export const ResponseCard = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

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
            status={location.state?.status === 404 ? 'error' : 'warning'}
            title={<Typography.Title level={2}>{title[location.state?.status]}</Typography.Title>}
            subTitle={subtitle[location?.state.status]}
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    key='console'
                    block
                    size='large'
                    data-test-id='registration-back-button'
                    onClick={() => dispatch(push('/auth/registration'))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
