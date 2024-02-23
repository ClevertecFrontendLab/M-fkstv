import { Button, Card, Image, Typography } from 'antd';
import { history } from '@redux/configure-store';

import suggested from '../../assets/images/suggested.svg';
import styles from './registration-success.module.css';

export const RegistrationSuccess = () => {
    return (
        <div className={styles.root}>
            <Card
                bodyStyle={{
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',

                    width: '100%',
                }}
                className={styles.card}
                title={<Image src={suggested} />}
            >
                <Typography.Text className={styles.title}>Регистрация успешна</Typography.Text>
                <Typography.Text className={styles.subtitle}>
                    Регистрация прошла успешно. Зайдите
                    <br />в приложение, используя свой e-mail и пароль.
                </Typography.Text>
                <Button
                    onClick={() => history.push('/auth')}
                    data-test-id='registration-enter-button'
                    size='large'
                    block
                    type='primary'
                    htmlType='submit'
                >
                    Войти
                </Button>
            </Card>
        </div>
    );
};
