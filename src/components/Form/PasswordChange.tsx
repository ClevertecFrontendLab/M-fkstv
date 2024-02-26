import { Button, Form, Input, Typography } from 'antd';
import styles from './PasswordChange.module.css';

export const PasswordChange: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        console.log('!!!');
    };
    return (
        <div className={styles.root}>
            <Typography.Text className={styles.title}>Восстановление аккаунта</Typography.Text>
            <Form
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                size='large'
                fields={[{ name: 'password' }, { name: 'confirmPassword' }]}
            >
                <Form.Item
                    style={{
                        marginBottom: 46,
                    }}
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    name='password'
                    data-test-id='change-password'
                    rules={[
                        { required: true, message: 'Новый паролль' },
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
                >
                    <Input.Password size='large' placeholder='Новый пароль' />
                </Form.Item>

                <Form.Item
                    style={{
                        marginBottom: 62,
                    }}
                    name='confirmPassword'
                    data-test-id='change-confirm-password'
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
                    <Input.Password placeholder='Повторите пароль' />
                </Form.Item>

                <Button
                    className='change-password__button'
                    type='primary'
                    block
                    htmlType='submit'
                    data-test-id='change-submit-button'
                >
                    Сохранить
                </Button>
            </Form>
        </div>
    );
};
