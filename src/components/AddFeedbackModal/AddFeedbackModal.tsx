import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Rating } from '@components/Rating';
import { usePostFeedbackMutation } from '@redux/api/feedbackApi';
import { Form, Input, Modal, ModalProps, Rate } from 'antd';

type AddFeedbackModalProps = ModalProps & {
    open: boolean;
};

export type FeedbackForm = {
    rating: number;
    message?: string;
};

export const AddFeedbackModal = ({ open, onOk, onCancel }: AddFeedbackModalProps) => {
    const [postFeedback] = usePostFeedbackMutation();
    const [form] = Form.useForm<FeedbackForm>();

    const handleCancel = () => {
        console.log('Clicked cancel button');
    };

    const handleOk = async () => {
        if (!form.validateFields()) console.log('not valid');

        await form
            .validateFields()
            .then((values) => {
                postFeedback(values);
            })
            .catch((errorInfo) => {
                console.log(errorInfo);
            });
    };

    return (
        <Modal
            title='Ваш отзыв'
            open={open}
            onOk={handleOk}
            onCancel={onCancel}
            okType='link'
            okButtonProps={
                {
                    // disabled: !valid,
                }
            }
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
                    <Rating rating={0} />
                </Form.Item>

                <Form.Item name='message'>
                    <Input.TextArea autoSize />
                </Form.Item>
            </Form>
        </Modal>
    );
};
