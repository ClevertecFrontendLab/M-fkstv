import { Button, Result, Typography } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import styles from './ErrrorResponse.module.css';
import { PATH } from '@constants/endpoints';

export const ErrorCheckEmail: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Result
            className={styles.root}
            status='500'
            title={<Typography.Title level={2}>Что-то пошло не так</Typography.Title>}
            subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    size='large'
                    data-test-id='check-back-button'
                    onClick={() => dispatch(push(PATH.AUTH))}
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
