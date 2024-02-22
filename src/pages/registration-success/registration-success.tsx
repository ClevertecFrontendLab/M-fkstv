import { Button, Card, Image, Typography } from 'antd';
import suggested from '../../assets/images/suggested.svg';
import styles from './registration-success.module.css';

export const RegistrationSuccess = () => {
    return (
        <div className={styles.root}>
            <Card className={styles.card} title={<Image src={suggested} />}>
                <Typography.Title level={3}>Регистрация успешна</Typography.Title>
                <Typography.Text>
                    Регистрация прошла успешно. Зайдите
                    <br />в приложение, используя свой e-mail и пароль.
                </Typography.Text>
                <Button size='large' block type='primary' htmlType='submit'>
                    Войти
                </Button>
            </Card>
        </div>
    );
};
