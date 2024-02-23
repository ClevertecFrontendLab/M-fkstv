import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

import { Itoken, useLoginMutation } from '../../api/loginApi';

import { ErrorElem } from '@components/Error';
import { history } from '@redux/configure-store';

import { formValues } from '../../types/formValues';

import styles from './LoginForm.module.css';
import { Loader } from '@components/Loader';

export const LoginForm: React.FC = () => {
    const [login, { isSuccess, isLoading, error }] = useLoginMutation();

    const onFinish = async (values: formValues) => {
        const token: Itoken = await login(values).unwrap();
        values.remember && sessionStorage.setItem('token', token.accessToken);
    };

    if (isLoading) return <Loader />;

    if (error) {
        history.push('/result/error');
        <ErrorElem status={JSON.stringify(error)} />;
    }

    if (isSuccess) history.push('/main');

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
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input addonBefore='e-mail:' size='large' placeholder='Email' />
                </Form.Item>
                12@gmail.com Q1w2e3r4
                <Form.Item
                    data-test-id='login-password'
                    rules={[{ required: true, message: 'Please input your Password!' }]}
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
