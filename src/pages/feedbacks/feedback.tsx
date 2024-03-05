import { useState } from 'react';

import {
    FeedbackForm,
    useGetFeedbacksQuery,
    usePostFeedbackMutation,
} from '@redux/api/feedbackApi';

import { AddFeedbackModal } from '@components/AddFeedbackModal';
import { FeedbackEmpty } from '@components/FeedbackEmpty';
import { FeedbackFooter } from '@components/FeedbackFooter';
import { FeedbackList } from '@components/FeedbackList';
import { FeedbackSucces } from '@components/FeedbackSucces';
import { Loader } from '@components/Loader';
import { useSortByDate } from '@hooks/sort-by-date-hook';

export const Feedback = () => {
    const { data: feedbacks, isFetching, isLoading } = useGetFeedbacksQuery();
    const [showAll, setShowAll] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [postFeedbackSuccesopen, setpostFeedbackSuccesOpen] = useState<boolean>(false);
    const [postFeedback, { isSuccess: postFeedbackSucces }] = usePostFeedbackMutation();

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const set = async (val: FeedbackForm) => {
        try {
            await postFeedback(val).unwrap();
            // setOpen(false);
            setpostFeedbackSuccesOpen(true);
        } catch (error) {
            console.log(error);
        }
    };

    const sorted = useSortByDate(feedbacks);

    const dataToShow = showAll ? sorted : sorted?.slice(0, 4);

    if (isLoading || isFetching) return <Loader />;

    const nahdleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            {/* <FeedbackEmpty open={open} setOpen={setOpen} /> */}
            <FeedbackList feedbacks={dataToShow} />
            <FeedbackSucces
                open={postFeedbackSuccesopen}
                onCancel={() => setpostFeedbackSuccesOpen(false)}
                onSubmit={() => setpostFeedbackSuccesOpen(false)}
            />

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
