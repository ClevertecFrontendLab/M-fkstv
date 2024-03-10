import { Button, Result, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

import { PATH } from '@constants/endpoints';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import styles from './ErrrorResponse.module.css';

export const ErrorPasswordChange: React.FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <Result
            className={styles.root}
            status='error'
            title={<Typography.Title level={2}>Данные не сохранились</Typography.Title>}
            subTitle='Что-то пошло не так. Попробуйте ещё раз'
            extra={[
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                    size='large'
                    data-test-id='change-retry-button'
                    onClick={() =>
                        dispatch(push(PATH.AUTH_CHANGE_PASS, { prevLocation: location.pathname }))
                    }
                >
                    Повторить
                </Button>,
            ]}
        ></Result>
    );
};
