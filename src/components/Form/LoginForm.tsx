import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setUser } from '@redux/slices/user.slice';
import { Itoken, useCheckEmailMutation, useLoginMutation } from '../../redux/api/loginApi';

import { Loader } from '@components/Loader';

import { isFetchBaseQueryError } from '../../types/errorTypes';
import { formValues } from '../../types/types';

import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [form] = Form.useForm();

    const [login, { isSuccess, isLoading }] = useLoginMutation();
    const [checkEmail] = useCheckEmailMutation();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const prevLocation = useAppSelector((state) => state.router.previousLocations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email: string): boolean => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const handleCheckEmail = useCallback(
        async (email: string) => {
            try {
                await checkEmail({ email }).unwrap();
                dispatch(push('/auth/confirm-email', email));
            } catch (error) {
                if (isFetchBaseQueryError(error) && error.data?.message === 'Email не найден') {
                    dispatch(push('/result/error-check-email-no-exist', error));
                } else {
                    dispatch(push('/result/error-check-email', error));
                }
            }
        },
        [checkEmail, dispatch],
    );

    useEffect(() => {
        if (prevLocation && prevLocation[1]?.location?.pathname === '/result/error-check-email') {
            handleCheckEmail(email);
        }
    }, [email, handleCheckEmail, prevLocation]);

    const onFinish = useCallback(
        async (values: formValues) => {
            try {
                const token: Itoken = await login({
                    email: values.email,
                    password: values.password,
                }).unwrap();

                dispatch(push(location));
                dispatch(setUser({ email: values.email, password: values.password }));
                values.remember
                    ? localStorage.setItem('token', token.accessToken)
                    : sessionStorage.setItem('token', token.accessToken);
            } catch (error) {
                if (isFetchBaseQueryError(error)) dispatch(push('/result/error-login', error));
            }
        },
        [dispatch, location, login],
    );

    if (isLoading) return <Loader data-test-id='loader' />;

    if (isSuccess) dispatch(push('/main'));

    return (
        <>
            <Form
                form={form}
                layout='vertical'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className={styles.root}
            >
                <Form.Item
                    data-test-id='login-email'
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: '',
                            pattern: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
                        },
                    ]}
                >
                    <Input
                        onChange={onChange}
                        addonBefore='e-mail:'
                        size='large'
                        placeholder='Email'
                    />
                </Form.Item>

                <Form.Item
                    data-test-id='login-password'
                    rules={[
                        {
                            required: true,
                            min: 8,
                            message: '',
                        },
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
                    name='password'
                    // help='Пароль не менее 8 символов,с заглавной буквой и цифрой'
                >
                    <Input.Password size='large' placeholder='Пароль' />
                </Form.Item>
                <Row className={styles.forgot}>
                    <Form.Item name='remember' valuePropName='checked'>
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        <Button
                            type='link'
                            className={styles.span}
                            data-test-id='login-forgot-button'
                            onClick={() => validateEmail(email) && handleCheckEmail(email)}
                        >
                            Забыли пароль?
                        </Button>
                    </Form.Item>
                </Row>
                <Form.Item>
                    <Button
                        size='large'
                        block
                        type='primary'
                        htmlType='submit'
                        data-test-id='login-submit-button'
                    >
                        Войти
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button size='large' htmlType='submit' block icon={<GooglePlusOutlined />}>
                        Войти через Google
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
