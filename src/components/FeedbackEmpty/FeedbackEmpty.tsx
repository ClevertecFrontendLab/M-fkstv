import { Button, Typography } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import styles from './FeedbackEmpty.module.css';

type FeedbackEmptyProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const FeedbackEmpty = ({ open, setOpen }: FeedbackEmptyProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <Typography.Title level={3} className={styles.title}>
                    Оставьте свой отзыв первым
                </Typography.Title>
                <Typography.Paragraph className={styles.text}>
                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении. Поделитесь
                    своим мнением и опытом с другими пользователями, и помогите им сделать
                    правильный выбор.
                </Typography.Paragraph>
            </div>
            <Button
                data-test-id='write-review'
                type='primary'
                className={styles.button}
                onClick={() => setOpen(!open)}
            >
                Написать отзыв
            </Button>
        </div>
    );
};
