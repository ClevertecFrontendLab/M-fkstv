import { GooglePlusOutlined } from '@ant-design/icons';
import { Loader } from '@components/Loader';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { Button, Col, Form, Input } from 'antd';
import { push } from 'redux-first-history';
import { useRegistrationMutation } from '../../redux/api/registrationApi';
import { formValues } from '../../types/formValues';

import styles from './LoginForm.module.css';

interface Ierror {
    status: string | number;
}

export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [reg, { isLoading, isSuccess, error }] = useRegistrationMutation(); //Todo: type of error

    const onFinish = async (values: formValues) => {
        await reg(values);
    };

    if (isSuccess) dispatch(push('/result/success'));
    if (error) {
        if ('status' in error && error?.status === 409) dispatch(push('/result/error-user-exist'));
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
                className={styles.input}
                name='email'
                data-test-id='registration-email'
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input addonBefore='e-mail:' size='large' />
            </Form.Item>

            <Form.Item
                className={styles.inputPassword}
                name='password'
                data-test-id='registration-password'
                rules={[
                    { required: true, message: 'Please input your Password!' },
                    () => ({
                        validator(_, value) {
                            const condition = /[A-Z][0-9]/g.test(value);
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
                <Input.Password size='large' placeholder='Пароль' />
            </Form.Item>

            <Form.Item
                name='confirm'
                data-test-id='registration-confirm-password'
                dependencies={['password']}
                style={{
                    marginBottom: 60,
                }}
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
                <Input.Password size='large' placeholder='Повторите пароль' />
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
                    <Button size='large' block htmlType='submit' icon={<GooglePlusOutlined />}>
                        Регистрация через Google
                    </Button>
                </Form.Item>
            </Col>
        </Form>
    );
};
