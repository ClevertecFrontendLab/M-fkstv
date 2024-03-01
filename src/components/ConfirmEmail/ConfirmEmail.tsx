import { Result, Typography } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import { push } from 'redux-first-history';

import { Loader } from '@components/Loader';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useConfirmEmailMutation } from '@redux/api/loginApi';
import { isFetchBaseQueryError } from '../../types/errorTypes';

import styles from './ConfirmEmail.module.css';

export const ConfirmEmail: React.FC = () => {
    const email = useLocation().state;
    const [confirmEmail, { isSuccess, isLoading, error }] = useConfirmEmailMutation();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const title = error ? (
        <Typography.Text>Неверный код.ВВедите код для восстановления аккаунта</Typography.Text>
    ) : (
        <Typography.Text>
            Введите код
            <br /> для восстановления аккаунта
        </Typography.Text>
    );
    const status = error ? 'error' : 'info';

    const handleComplete = async (code: string) => {
        await confirmEmail({ email, code });
    };

    if (isLoading) return <Loader data-test-id='loader' />;

    if (isSuccess) dispatch(push('/auth/change-password', { prevLocation: location.pathname }));

    return (
        <Result
            status={status}
            className={styles.root}
            title={<Typography.Title level={2}>{title}</Typography.Title>}
            subTitle={
                <Typography.Text className={styles.subtitle}>
                    Мы отправили вам на e-mail{' '}
                    <span
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        {email}
                    </span>
                    <br />
                    шестизначный код. Введите его в поле ниже.
                </Typography.Text>
            }
        >
            <VerificationInput
                autoFocus
                data-test-id='verification-input'
                placeholder=''
                validChars='0-9'
                inputProps={{ 'data-test-id': 'verification-input' }}
                onComplete={handleComplete}
                classNames={{
                    container: styles.container,
                    character: error ? styles.characterError : styles.character,
                    characterInactive: styles.characterInactive,
                    characterSelected: styles.characterSelected,
                    characterFilled: styles.characterFilled,
                }}
            />
            <Typography.Text>Не пришло письмо? Проверьте папку Спам.</Typography.Text>
        </Result>
    );
};
