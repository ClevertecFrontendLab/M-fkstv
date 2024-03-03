import { useState } from 'react';
import { Button, Row, Space } from 'antd';

import { useGetFeedbacksQuery } from '@redux/api/feedbackApi';

import { Loader } from '@components/Loader';
import { FeedbackList } from '@components/FeedbackList';

export const Feedback: React.FC = () => {
    const [showAll, setShowAll] = useState<boolean>(false);

    const [open, setOpen] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const { data: feedbacks, isFetching, isLoading } = useGetFeedbacksQuery('');

    const dataToShow = !showAll ? feedbacks?.slice(0, 4) : feedbacks;

    if (isLoading || isFetching) return <Loader />;

    const handleClick = () => {
        console.log('Button clicked');
    };

    const nahdleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <FeedbackList feedbacks={dataToShow} />

            <Row>
                <Space
                    style={{
                        paddingLeft: 24,
                    }}
                    size={8}
                >
                    <Button
                        onClick={handleClick}
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
