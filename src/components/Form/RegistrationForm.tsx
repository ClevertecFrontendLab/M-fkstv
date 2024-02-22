import { GooglePlusOutlined } from '@ant-design/icons';
import { history } from '@redux/configure-store';
import { Button, Form, Input } from 'antd';
import { useRegistrationMutation } from '../../api/registrationApi';
import { formValues } from '../../types/formValues';
import styles from './LoginForm.module.css';

export const RegistrationForm: React.FC = () => {
    const [reg] = useRegistrationMutation();

    const onFinish = async (values: formValues) => {
        try {
            await reg(values);
            history.push('/result/success');
        } catch (error) {
            console.log(error);
        }
    };

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
                rules={[{ required: true, message: 'Please input your Password!' }]}
                validateStatus=''
                help='Пароль не менее 8 символов,с заглавной буквой и цифрой'
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
                            return Promise.reject(new Error('Пароли не совпадают'));
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
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
