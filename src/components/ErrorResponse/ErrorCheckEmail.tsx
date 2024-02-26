import { Button, Result, Typography } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

export const ErrorCheckEmail: React.FC = () => {
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
            status='500'
            title={<Typography.Title level={2}>Что-то пошло не так</Typography.Title>}
            subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    size='large'
                    data-test-id='check-back-button'
                    onClick={() => dispatch(push('/auth'))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
