import { Button, Result, Typography } from 'antd';

import { PATH } from '@constants/endpoints';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import styles from './ErrrorResponse.module.css';

export const ErrorResponse: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Result
            className={styles.root}
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
                    onClick={() => dispatch(push(PATH.AUTH))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
