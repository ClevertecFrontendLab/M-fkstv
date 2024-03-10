import { useEffect, useState } from 'react';

import {
    FeedbackForm,
    useGetFeedbacksQuery,
    usePostFeedbackMutation,
} from '@redux/api/feedbackApi';

import { AddFeedbackModal } from '@components/Feedback/AddFeedbackModal';
import {
    FeedbackFooter,
    FeedbackError,
    FeedbackSucces,
    FeedbackServerError,
    FeedbackList,
    FeedbackEmpty,
} from '@components/Feedback';
import { Loader } from '@components/Loader';
import { useSortByDate } from '@hooks/sort-by-date-hook';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

export const Feedback = () => {
    const {
        data: feedbacks,
        isFetching,
        isLoading,
        isError: fetchError,
        error,
    } = useGetFeedbacksQuery();

    const [postFeedback, { isSuccess: postFeedbackSucces, isError: postFeedbackError }] =
        usePostFeedbackMutation();

    const [showAll, setShowAll] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [postFeedbackSuccesopen, setpostFeedbackSuccesOpen] = useState<boolean>(false);
    const [postFeedbackErrorOpen, setPostpostFeedbackErrorOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (error) {
            if ('status' in error && error.status == 403) {
                localStorage.removeItem('token');
                dispatch(push('/auth'));
            }
        }
    }, [dispatch, error]);

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const goBack = () => {
        dispatch(push('/main'));
    };

    const set = async (val: FeedbackForm) => {
        try {
            await postFeedback(val).unwrap();

            setpostFeedbackSuccesOpen(true);
        } catch (error) {
            setPostpostFeedbackErrorOpen(true);
        }
    };

    const sorted = useSortByDate(feedbacks);

    const dataToShow = showAll ? sorted : sorted?.slice(0, 4);

    const nahdleShowAll = () => {
        setShowAll(!showAll);
    };

    const tryAgain = () => {
        setPostpostFeedbackErrorOpen(false);
        setOpen(true);
    };

    if (isLoading || isFetching) return <Loader />;
    return (
        <>
            {fetchError && <FeedbackServerError open={true} onSubmit={goBack} onCancel={goBack} />}
            {!feedbacks?.length && <FeedbackEmpty open={open} setOpen={setOpen} />}
            <FeedbackList feedbacks={dataToShow} />
            {postFeedbackSucces && (
                <FeedbackSucces
                    open={postFeedbackSuccesopen}
                    onCancel={() => setpostFeedbackSuccesOpen(false)}
                    onSubmit={() => setpostFeedbackSuccesOpen(false)}
                />
            )}

            {postFeedbackError && (
                <FeedbackError
                    open={postFeedbackErrorOpen}
                    onSubmit={tryAgain}
                    onCancel={() => setPostpostFeedbackErrorOpen(false)}
                />
            )}

            <AddFeedbackModal
                onSubmit={set}
                open={open}
                setOpen={setOpen}
                onCancel={handleCancel}
            />
            {feedbacks?.length && (
                <FeedbackFooter showAll={showAll} onClick={showModal} onShowAll={nahdleShowAll} />
            )}
        </>
    );
};
