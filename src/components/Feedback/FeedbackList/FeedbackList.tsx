import { Rating } from '@components/Rating';
import { Feedback } from '@redux/api/feedbackApi';
import { Avatar, Comment, List, Typography } from 'antd';
import styles from './FeedbackList.module.css';

type FeedbackListProps = {
    feedbacks: Feedback[];
};

export const FeedbackList = ({ feedbacks }: FeedbackListProps) => {
    const formattedDate = (currentDate: Date) =>
        currentDate.toLocaleDateString('ru-RU', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });

    return (
        <List
            className={styles.root}
            dataSource={feedbacks}
            itemLayout='horizontal'
            renderItem={(item) => (
                <div className={styles.item}>
                    <Comment
                        avatar={
                            <div className={styles.avatar}>
                                <Avatar src={item.imageSrc} size={42} alt={item.fullname} />

                                <Typography.Text>
                                    {item.fullname}ADADC fawkeblkfnavkd
                                </Typography.Text>
                            </div>
                        }
                        author={<Rating rating={item.rating} disabled />}
                        datetime={formattedDate(new Date(item.createdAt))}
                        content={item.message}
                    />
                </div>
            )}
        ></List>
    );
};
