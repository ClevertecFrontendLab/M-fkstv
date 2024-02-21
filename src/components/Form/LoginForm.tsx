import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import Lottie from 'react-lottie';

import { Link, useNavigate } from 'react-router-dom';

import { defaultOptions } from '@components/Loader/loader_options';
import { Itoken, useLoginMutation } from '../../api/loginApi';

import { ErrorElem } from '@components/Error';
import { formValues } from '../../types/formValues';
import styles from './LoginForm.module.css';
import { history } from '@redux/configure-store';

export const LoginForm: React.FC = () => {
    const [login, { isSuccess, isError, isLoading, error }] = useLoginMutation();

    const navigate = useNavigate();

    const onFinish = async (values: formValues) => {
        const token: Itoken = await login(values).unwrap();
        values.remember && sessionStorage.setItem('token', token.accessToken);
        values.remember && localStorage.setItem('token', token.accessToken);
    };

    if (isLoading) return <Lottie options={defaultOptions} height={150} width={150} />;
    if (isError) {
        history.push('/result/error');
        <ErrorElem status={error?.status} data={error?.data} />;
    }
    if (isSuccess) navigate('/main');

    return (
        <Form
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className={styles.root}
        >
            <Form.Item
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
                rules={[{ required: true, message: 'Please input your Password!' }]}
                name='password'
                validateStatus=''
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
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Button type='link' className={styles.span}>
                    <Link to={'#'}>Забыли пароль?</Link>
                </Button>
            </Row>
            <Form.Item>
                <Button size='large' block type='primary' htmlType='submit'>
                    Войти
                </Button>
            </Form.Item>
            <Form.Item>
                <Button size='large' htmlType='submit' block icon={<GooglePlusOutlined />}>
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
