import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Button, Layout, List, Typography } from 'antd';

import styles from './Content.module.css';

export const Content = () => {
    const list = [
        ' — планировать свои тренировки на календаре,выбирая тип и уровень нагрузки;',
        ' — отслеживать свои достижения в разделе статистики, сравнивая свои результаты c нормами и рекордами;',
        ' — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
        ' — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    ];

    return (
        <Layout.Content className={styles.content}>
            <div className={styles.cards}>
                {/* <List   // TODO: сделать через компонент antd
                    bordered={false}
                    dataSource={list}
                    header={' C CleverFit ты сможешь'}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                ></List> */}

                <ul>
                    C CleverFit ты сможешь:{' '}
                    {list.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>

            <div className={styles.cards}>
                <Typography.Text className={styles.title}>
                    CleverFit &mdash; это не просто приложение, а твой личный помощник в мире
                    фитнеса. Не откладывай на завтра &mdash; начни тренироваться уже сегодня!{' '}
                </Typography.Text>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <Typography.Text>Расписать тренировки</Typography.Text>
                    </div>

                    <Button className={styles.button} icon={<HeartFilled />}>
                        Тренировки
                    </Button>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <Typography.Text>Назначить календарь</Typography.Text>
                    </div>

                    <Button
                        className={styles.button}
                        icon={<CalendarTwoTone twoToneColor={['#2F54EB', '#2F54EB']} />}
                    >
                        Календарь
                    </Button>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <Typography.Text>Заполнить профиль</Typography.Text>
                    </div>

                    <Button className={styles.button} icon={<IdcardOutlined />}>
                        Профиль
                    </Button>
                </div>
            </div>
        </Layout.Content>
    );
};
