import { GooglePlusOutlined } from '@ant-design/icons';
import { Loader } from '@components/Loader';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Button, Col, Form, Input } from 'antd';
import { push } from 'redux-first-history';
import { useRegistrationMutation } from '../../redux/api/loginApi';
import { formValues } from '../../types/types';

import { useCallback, useEffect } from 'react';
import styles from './LoginForm.module.css';

export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const [registration, { isLoading, isSuccess, error }] = useRegistrationMutation();
    const prevLocation = useAppSelector((state) => state.router.previousLocations);
    const user = useAppSelector((state) => state.user);

    const onFinish = useCallback(
        async (values: formValues) => {
            await registration(values);
        },
        [registration],
    );

    useEffect(() => {
        if (prevLocation && prevLocation[1]?.location?.pathname === '/result/error') {
            onFinish(user);
        }
    }, [onFinish, prevLocation, user]);

    if (isSuccess) dispatch(push('/result/success'));
    if (error) {
        if ('status' in error && error?.status === 409) {
            dispatch(push('/result/error-user-exist', error));
        } else {
            dispatch(push('/result/error'));
        }
    }
    if (isLoading) return <Loader />;

    return (
        <Form
            onFinish={onFinish}
            layout='vertical'
            initialValues={{ remember: true }}
            className={styles.root}
        >
            <Form.Item
                style={{
                    marginBottom: 32,
                }}
                name='email'
                data-test-id='registration-email'
                rules={[
                    {
                        type: 'email',
                        required: true,
                        message: '',
                        pattern: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
                    },
                ]}
            >
                <Input addonBefore={'e-mail:'} size='large' />
            </Form.Item>

            <Form.Item
                style={{
                    marginBottom: 46,
                }}
                name='password'
                rules={[
                    { required: true, message: 'Please input your Password!' },
                    () => ({
                        validator(_, value) {
                            const condition =
                                /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g.test(value);
                            if (condition) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error('Пароль не менее 8 символов,с заглавной буквой и цифрой'),
                            );
                        },
                    }),
                ]}
                help='Пароль не менее 8 символов,с заглавной буквой и цифрой'
            >
                <Input.Password
                    size='large'
                    placeholder='Пароль'
                    data-test-id='registration-password'
                />
            </Form.Item>

            <Form.Item
                name='confirm'
                dependencies={['password']}
                style={{
                    marginBottom: 60,
                }}
                rules={[
                    {
                        required: true,
                        message: '',
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
                    size='large'
                    placeholder='Повторите пароль'
                    data-test-id='registration-confirm-password'
                />
            </Form.Item>

            <Col className={styles.btnGroup}>
                <Form.Item
                    style={{
                        marginBottom: 16,
                    }}
                >
                    <Button
                        size='large'
                        htmlType='submit'
                        block
                        type='primary'
                        data-test-id='registration-submit-button'
                    >
                        Войти
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={() => (window.location.href = 'http://localhost:3000/auth/google')}
                        size='large'
                        block
                        htmlType='submit'
                        icon={<GooglePlusOutlined />}
                    >
                        Регистрация через Google
                    </Button>
                </Form.Item>
            </Col>
        </Form>
    );
};
