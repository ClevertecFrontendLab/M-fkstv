import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import {
    IEmail,
    IcheckEmailResponse,
    Itoken,
    useCheckEmailMutation,
    useLoginMutation,
} from '../../redux/api/loginApi';

import { formValues } from '../../types/formValues';

import { Loader } from '@components/Loader';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setUser } from '@redux/slices/user.slice';
import { push } from 'redux-first-history';
import styles from './LoginForm.module.css';
import { useState } from 'react';

interface Iform {
    email: string;
    password: string;
    confirm: string;
    remember: boolean;
}

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [form] = Form.useForm();

    const [login, { isSuccess, isLoading }] = useLoginMutation();
    const [checkEmail, { error }] = useCheckEmailMutation();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email: string): boolean => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const handleCheckEmail = async (email: string) => {
        try {
            await checkEmail({ email }).unwrap();
            dispatch(push('/auth/check-email'));
        } catch (error) {
            console.log(error);
        }
    };

    if (error) {
        if ('status' in error && error?.status === 404) {
            dispatch(push('/result/error-check-email-no-exist', error));
        }
    }

    const onFinish = async (values: formValues) => {
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
            console.log(error);

            dispatch(push('/result/error-login', error));
        }
    };

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
                            message: 'Введите пароль',
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
                    help='Пароль не менее 8 символов,с заглавной буквой и цифрой'
                >
                    <Input.Password size='large' placeholder='Пароль' />
                </Form.Item>
                <Row
                    justify='space-between'
                    style={{
                        marginBottom: '24px',
                    }}
                >
                    <Form.Item name='remember' valuePropName='checked'>
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        <Button
                            type='link'
                            disabled={!validateEmail(email)}
                            className={styles.span}
                            data-test-id='login-forgot-button'
                            onClick={() => handleCheckEmail(email)}
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
