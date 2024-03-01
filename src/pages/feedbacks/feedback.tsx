import { Loader } from '@components/Loader';
import { Rating } from '@components/Rating';
import { useGetFeedbacksQuery } from '@redux/api/feedbackApi';
import { Avatar, Comment, List, Typography } from 'antd';
import styles from './feedback.module.css';

export const Feedback = () => {
    const { data: feadbacks, isFetching, isLoading } = useGetFeedbacksQuery(null);

    const formattedDate = (currentDate: Date) =>
        currentDate.toLocaleDateString('ru-RU', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });

    if (isLoading) return <Loader />;
    return (
        <List
            className={styles.root}
            dataSource={feadbacks?.slice(0, 4)}
            itemLayout='horizontal'
            renderItem={(item) => (
                <div className={styles.item}>
                    <Comment
                        avatar={
                            <div className={styles.avatar}>
                                <Avatar src={item.imageSrc} size={42} alt={'###'} />
                                <Typography.Text>Вероника Киверова</Typography.Text>
                            </div>
                        }
                        author={<Rating rating={item.rating} />}
                        datetime={formattedDate(new Date(item.createdAt))}
                        content={
                            'Я очень довольна этим приложением! Оно помогает мне следить за своим здоровьем и физической формой, предлагая разнообразные упражнения и питание. Я люблю, что приложение адаптируется к моему уровню и целям, и дает мне полезные советы и обратную связь. Я рекомендую это приложение всем, кто хочет улучшить свою жизнь!'
                        }
                    />
                </div>
            )}
        ></List>
    );
};
