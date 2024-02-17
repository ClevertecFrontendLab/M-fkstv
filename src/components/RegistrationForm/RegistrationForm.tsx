import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Space } from 'antd';

import styles from './RegistrationForm.module.css';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { Link } from 'react-router-dom';
import { GooglePlusOutlined } from '@ant-design/icons';

export const RegistrationForm: React.FC = () => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
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

            <Form.Item
                rules={[{ required: true, message: 'Please input your Password!' }]}
                label=''
                validateStatus=''
            >
                <Input.Password size='large' placeholder='Пароль' />
            </Form.Item>

            <div className={styles.forgot}>
                <Checkbox onChange={onChange}>Запомнить меня</Checkbox>
                <span className={styles.span}>
                    <Link to={'#'}>Забыли пароль?</Link>
                </span>
            </div>
            <Row
                justify='space-between'
                style={{
                    marginBottom: '24px',
                }}
            >
                <Checkbox onChange={onChange}>Запомнить меня</Checkbox>
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
