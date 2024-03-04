import { Rating } from '@components/Rating';
import { Avatar, Comment, List, Typography } from 'antd';
import { Feedback } from '@redux/api/feedbackApi';
import styles from './FeedbackList.module.css';
import { useSortByDate } from '@hooks/sort-by-date-hook';

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
    // const sortedData = useSortByDate(feedbacks);

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
                                <Avatar src={item.imageSrc} size={42} alt={'###'} />
                                {/* <Typography.Text>Вероника Киверова</Typography.Text> */}
                                <Typography.Text>{item.fullname}</Typography.Text>
                            </div>
                        }
                        author={<Rating rating={item.rating} />}
                        datetime={formattedDate(new Date(item.createdAt))}
                        content={item.message}
                        // content={
                        //     'Я очень довольна этим приложением! Оно помогает мне следить за своим здоровьем и физической формой, предлагая разнообразные упражнения и питание. Я люблю, что приложение адаптируется к моему уровню и целям, и дает мне полезные советы и обратную связь. Я рекомендую это приложение всем, кто хочет улучшить свою жизнь!'
                        // }
                    />
                </div>
            )}
        ></List>
    );
};
