import { Button, Row, Space } from 'antd';
import { useState } from 'react';

import {
    FeedbackForm,
    useGetFeedbacksQuery,
    usePostFeedbackMutation,
} from '@redux/api/feedbackApi';

import { AddFeedbackModal } from '@components/AddFeedbackModal';
import { FeedbackList } from '@components/FeedbackList';
import { Loader } from '@components/Loader';
import { useSortByDate } from '@hooks/sort-by-date-hook';
import { FeedbackFooter } from '@components/FeedbackFooter';

export const Feedback = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [postFeedback, { isSuccess }] = usePostFeedbackMutation();

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const set = async (val: FeedbackForm) => {
        await postFeedback(val).unwrap();
    };

    if (isSuccess) {
        console.log(';adasdfjsnvkj');
    }

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
            <AddFeedbackModal
                onSubmit={set}
                open={open}
                setOpen={setOpen}
                onCancel={handleCancel}
            />
            <FeedbackFooter showAll={showAll} onClick={showModal} onShowAll={nahdleShowAll} />
        </>
    );
};
