import { Button, Checkbox, Form, Input, InputNumber, Space } from 'antd';

import styles from '../RegistrationForm/RegistrationForm.module.css';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { Link } from 'react-router-dom';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import { useAuthMutation } from '../../api/authApi';

export const AuthForm: React.FC = () => {
    const [auth] = useAuthMutation();

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onFinish = async (values: any) => {
        // console.log('Success:', values);
        const res = await auth(values);
        console.log(res);
    };
    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout='vertical'
            initialValues={{ remember: true }}
            // autoComplete='off'
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

            <div className={styles.forgot}>
                <Checkbox onChange={onChange}>Запомнить меня</Checkbox>
                <span className={styles.span}>
                    <Link to='#'>Забыли пароль?</Link>
                </span>
            </div>

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
