import React from 'react';
import styles from './ConfirmEmail.module.css';
import VerificationInput from 'react-verification-input';
import { Result, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { useConfirmEmailMutation } from '@redux/api/loginApi';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { Loader } from '@components/Loader';

// interface error {
//     status: string | number;
//     data: {
//         statusCode: number;
//         error: string;
//         message: string;
//     };
// }

export const ConfirmEmail: React.FC = () => {
    const email = useLocation().state;
    const [confirmEmail, { isSuccess, isLoading, error }] = useConfirmEmailMutation();
    const dispatch = useAppDispatch();

    const title = error ? error?.data?.message : ' Введите код для восстановления аккаунта';
    const status = error ? 'error' : 'info';

    const handleComplete = async (code: string) => {
        await confirmEmail({ email, code });
    };

    if (isLoading) return <Loader data-test-id='loader' />;

    if (isSuccess) dispatch(push('/auth/change-password'));

    return (
        <Result
            status={status}
            className={styles.root}
            title={<Typography.Title level={2}>{title}</Typography.Title>}
            subTitle={
                <p className={styles.subtitle}>
                    'Мы отправили вам на e-mail{' '}
                    <span
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        {email}
                    </span>
                    <br />
                    шестизначный код. Введите его в поле ниже.'
                </p>
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
