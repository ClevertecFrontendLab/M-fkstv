import { Button, Row, Space } from 'antd';
import { useState } from 'react';

import { useGetFeedbacksQuery } from '@redux/api/feedbackApi';

import { AddFeedbackModal } from '@components/AddFeedbackModal';
import { FeedbackList } from '@components/FeedbackList';
import { Loader } from '@components/Loader';
import { useSortByDate } from '@hooks/sort-by-date-hook';

export const Feedback = () => {
    const [showAll, setShowAll] = useState<boolean>(false);

    const [open, setOpen] = useState<boolean>(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        console.log('fuck');
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const { data: feedbacks, isFetching, isLoading } = useGetFeedbacksQuery();
    const sorted = useSortByDate(feedbacks);

    const dataToShow = showAll ? sorted : sorted?.slice(0, 4);

    if (isLoading || isFetching) return <Loader />;

    const nahdleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <FeedbackList feedbacks={dataToShow} />
            <AddFeedbackModal open={open} onOk={handleOk} onCancel={handleCancel} />
            <Row>
                <Space
                    style={{
                        paddingLeft: 24,
                    }}
                    size={8}
                >
                    <Button
                        onClick={showModal}
                        style={{
                            fontSize: 14,
                        }}
                        // className={styles.btn}
                        size='large'
                        type='primary'
                    >
                        Написать отзыв
                    </Button>
                    <Button
                        onClick={nahdleShowAll}
                        style={{
                            fontSize: 16,
                        }}
                        // className={styles.btn}
                        size='large'
                        type='link'
                    >
                        {!showAll ? 'Развернуть все отзывы' : 'Скрыть отзывы'}
                    </Button>
                </Space>
            </Row>
        </>
    );
};
