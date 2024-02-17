import { Button, Checkbox, Form, Input, Row } from 'antd';

import { GooglePlusOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../api/loginApi';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
    const [login] = useLoginMutation();

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const res = await login(values);
        console.log(res);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
            12@gmail.com
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
                    <Checkbox onChange={onChange}>Запомнить меня</Checkbox>
                </Form.Item>

                <span className={styles.span}>
                    <Link to={'#'}>Забыли пароль?</Link>
                </span>
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
