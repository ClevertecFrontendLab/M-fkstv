import { Button, Result, Typography } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

import styles from './ErrrorResponse.module.css';

export const ErrorUserExist: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Result
            className={styles.root}
            status='warning'
            title={<Typography.Title level={2}>Данные не сохранились</Typography.Title>}
            subTitle='Такой e-mail уже записан в системе. Попробуйте зарегестрироваться по другому e-mail.'
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
