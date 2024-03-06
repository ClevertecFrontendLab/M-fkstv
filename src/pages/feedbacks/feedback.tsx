import { useEffect, useState } from 'react';

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
import { FeedbackError } from '@components/FeedbackError';
import { Button, Modal, Result } from 'antd';
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
    const [showAll, setShowAll] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [fetchErrorOpen, setfetchErrorOpen] = useState<boolean>(false);
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

    const [postFeedback, { isSuccess: postFeedbackSucces, isError: postFeedbackError }] =
        usePostFeedbackMutation();

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

    if (isLoading || isFetching) return <Loader />;

    const nahdleShowAll = () => {
        setShowAll(!showAll);
    };

    const tryAgain = () => {
        setPostpostFeedbackErrorOpen(false);
        setOpen(true);
    };

    return (
        <>
            {fetchError && (
                <Modal
                    open={true}
                    onCancel={goBack}
                    footer={null}
                    centered
                    closable={false}
                    maskStyle={{ background: '#799cd480', backdropFilter: 'blur(5px)' }}
                >
                    <Result
                        status='500'
                        title='Что-то пошло не так'
                        subTitle='Произошла ошибка, попробуйте ещё раз.'
                        extra={
                            <Button type='primary' onClick={goBack}>
                                Назад
                            </Button>
                        }
                    />
                </Modal>
            )}
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
