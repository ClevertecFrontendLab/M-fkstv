import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Form, Input, Modal, ModalProps, Rate } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';

import rateStyles from '../Rating/Rating.module.css';

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
    const [form] = Form.useForm<FeedbackForm>();

    const handleOk = async () => {
        onSubmit(await form.validateFields());
        setOpen(!open);
    };

    return (
        <Modal
            title='Ваш отзыв'
            open={open}
            onOk={handleOk}
            onCancel={onCancel}
            okType='link'
            okButtonProps={{
                disabled: !validForm,
            }}
            cancelButtonProps={{
                hidden: true,
            }}
            okText='Опубликовать'
            maskClosable
            maskStyle={{
                backdropFilter: 'blur(4px)',
            }}
        >
            <Form form={form}>
                <Form.Item name='rating' required>
                    <Rate
                        onChange={() => setvalidForm(true)}
                        className={rateStyles.rate}
                        character={({ index = 0, value = 0 }) => {
                            if (index != undefined)
                                return index < value ? (
                                    <StarFilled
                                        style={{
                                            fontSize: 16,
                                            color: '#FAAD14',
                                        }}
                                    />
                                ) : (
                                    <StarOutlined
                                        style={{
                                            fontSize: 16,
                                            color: '#FAAD14',
                                        }}
                                    />
                                );
                        }}
                    />
                </Form.Item>

                <Form.Item name='message'>
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};
