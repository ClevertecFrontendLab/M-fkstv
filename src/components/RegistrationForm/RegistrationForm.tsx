import { Button, Form, Input } from 'antd';

import { GooglePlusOutlined } from '@ant-design/icons';
import { useRegistrationMutation } from '../../api/registrationApi';
import styles from '../LoginForm/LoginForm.module.css';

export const RegistrationForm: React.FC = () => {
    const [reg] = useRegistrationMutation();

    const onFinish = async (values: any) => {
        console.log(values);

        await reg(values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout='vertical'
            initialValues={{ remember: true }}
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
            Q1w2e3r4
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
                label=''
                validateStatus=''
            >
                <Input.Password size='large' placeholder='Пароль' />
            </Form.Item>
            <Form.Item
                name='confirm'
                dependencies={['password']}
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
                            return Promise.reject(
                                new Error('The two passwords that you entered do not match!'),
                            );
                        },
                    }),
                ]}
            >
                <Input.Password size='large' placeholder='Повторите пароль' />
            </Form.Item>
            <Form.Item>
                <Button size='large' htmlType='submit' block type='primary'>
                    Войти
                </Button>
            </Form.Item>
            <Form.Item>
                <Button size='large' block htmlType='submit' icon={<GooglePlusOutlined />}>
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
