import { Button, Form, Input, Typography } from 'antd';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { push } from 'redux-first-history';

import { Loader } from '@components/Loader';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useChangePasswordMutation } from '@redux/api/loginApi';

import styles from './PasswordChange.module.css';
import { IChangePassword } from '../../types/types';

export const PasswordChange: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [changePassword, { isLoading, isSuccess, error }] = useChangePasswordMutation();
    const dispatch = useAppDispatch();
    const values = form.getFieldsValue(true);
    const location = useLocation();
    const prevLoc = location.state?.prevLocation;

    const onFinish = async (values: IChangePassword) => {
        await changePassword(values);
    };

    useEffect(() => {
        if (prevLoc && prevLoc !== '/auth/confirm-email') {
            navigate('/auth');
        }
        if (prevLoc && prevLoc === '/result/error-change-password') {
            onFinish(values);
            dispatch(push('/result/success-change-password'));
        }
    }, []);

    if (isLoading) return <Loader data-test-id='loader' />;

    if (error) dispatch(push('/result/error-change-password'));

    if (isSuccess) dispatch(push('/result/success-change-password'));

    return (
        <div className={styles.root}>
            <Typography.Text className={styles.title}>Восстановление аккаунта</Typography.Text>
            <Form
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                size='large'
                fields={[{ name: 'password' }, { name: 'confirmPassword' }]}
            >
                <Form.Item
                    style={{
                        marginBottom: 46,
                    }}
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    name='password'
                    rules={[
                        { required: true, message: 'Новый паролль' },
                        () => ({
                            validator(_, value) {
                                const condition =
                                    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g.test(value);
                                if (condition) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        'Пароль не менее 8 символов,с заглавной буквой и цифрой',
                                    ),
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        data-test-id='change-password'
                        size='large'
                        placeholder='Новый пароль'
                    />
                </Form.Item>

                <Form.Item
                    style={{
                        marginBottom: 62,
                    }}
                    name='confirmPassword'
                    rules={[
                        {
                            required: true,
                            message: 'Повторите пароль',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        data-test-id='change-confirm-password'
                        placeholder='Повторите пароль'
                    />
                </Form.Item>

                <Button type='primary' block htmlType='submit' data-test-id='change-submit-button'>
                    Сохранить
                </Button>
            </Form>
        </div>
    );
};
