import { Button, Result, Typography } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import styles from './registration-success.module.css';

export const RegistrationSuccess: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Result
            className={styles.root}
            status='success'
            title={<Typography.Title level={2}>Регистрация успешна</Typography.Title>}
            subTitle=' Регистрация прошла успешно. Зайдите в приложение, используя свой e-mail и пароль.'
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                    size='large'
                    data-test-id='registration-enter-button'
                    onClick={() => dispatch(push('/auth'))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
