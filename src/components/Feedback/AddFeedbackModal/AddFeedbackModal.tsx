import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, ModalProps, Rate, Typography } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setFeedback } from '@redux/slices/user.slice';
import rateStyles from '@components/Rating/Rating.module.css';
import styles from './AddFeedbackModal.module.css';

type AddFeedbackModalProps = ModalProps & {
    open: boolean;
    onSubmit: (val: FeedbackForm) => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export type FeedbackForm = {
    rating: number;
    message?: string;
};

export const AddFeedbackModal = ({ onSubmit, open, setOpen, onCancel }: AddFeedbackModalProps) => {
    const [validForm, setvalidForm] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const rating = useAppSelector((state) => state.feedback.rating);
    const message = useAppSelector((state) => state.feedback.message);
    const [form] = Form.useForm<FeedbackForm>();
    const values = form.getFieldsValue(true);

    const handlAddfeedback = async () => {
        onSubmit(await form.validateFields());
        dispatch(setFeedback(values));
        setOpen(!open);
    };

    const setRating = (rating: number) => {
        setvalidForm(true);
        dispatch(
            setFeedback({
                rating: rating,
                message: '',
            }),
        );
    };

    return (
        <Modal
            className={styles.root}
            title={
                <Typography.Title className={styles.title} level={5}>
                    Ваш отзыв
                </Typography.Title>
            }
            open={open}
            onCancel={onCancel}
            cancelButtonProps={{
                hidden: true,
            }}
            footer={[
                <Button
                    size={'large'}
                    disabled={!rating}
                    data-test-id='new-review-submit-button'
                    key='submit'
                    type='primary'
                    onClick={handlAddfeedback}
                >
                    Опубликовать
                </Button>,
            ]}
            maskClosable
            maskStyle={{
                backdropFilter: 'blur(4px)',
            }}
        >
            <Form form={form}>
                <Form.Item name='rating' required>
                    <Rate
                        defaultValue={rating}
                        onChange={(value) => setRating(value)}
                        className={rateStyles.rate}
                        character={({ index = 0, value = rating }) => {
                            if (index != undefined)
                                return index < value ? (
                                    <StarFilled
                                        style={{
                                            fontSize: 24,
                                            color: '#FAAD14',
                                        }}
                                    />
                                ) : (
                                    <StarOutlined
                                        style={{
                                            fontSize: 24,
                                            color: '#FAAD14',
                                        }}
                                    />
                                );
                        }}
                    />
                </Form.Item>

                <Form.Item name='message'>
                    <Input.TextArea value={message} autoSize />
                </Form.Item>
            </Form>
        </Modal>
    );
};
