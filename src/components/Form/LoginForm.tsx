import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { Itoken, useLoginMutation } from '../../redux/api/loginApi';

import { ErrorElem } from '@components/Error';

import { formValues } from '../../types/formValues';

import { Loader } from '@components/Loader';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setUser } from '@redux/slices/user.slice';
import { push } from 'redux-first-history';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
    const form = Form.useForm();
    const [login, { isSuccess, isLoading, isError, error }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const onFinish = async (values: formValues) => {
        const token: Itoken = await login({
            email: values.email,
            password: values.password,
        }).unwrap();
        dispatch(push(location));
        dispatch(setUser({ email: values.email, password: values.password }));
        values.remember
            ? localStorage.setItem('token', token.accessToken)
            : sessionStorage.setItem('token', token.accessToken);
    };

    if (isLoading) return <Loader data-test-id='loader' />;

    if (isError) {
        dispatch(push('/result/error-login'));
    }

    if (isSuccess) dispatch(push('/main'));

    return (
        <>
            <Form
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
                    <Input addonBefore='e-mail:' size='large' placeholder='Email' />
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

                    <Button type='link' className={styles.span} data-test-id='login-forgot-button'>
                        <Link to={'#'}>Забыли пароль?</Link>
                    </Button>
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
