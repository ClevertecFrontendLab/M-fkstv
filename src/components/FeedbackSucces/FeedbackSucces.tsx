import { useAppDispatch } from '@hooks/typed-react-redux-hooks';

import { Button, Modal, ModalProps, Result, Typography } from 'antd';
import { push } from 'redux-first-history';

type FeedbackSuccesProps = ModalProps & {
    open: boolean;
    onSubmit: () => void;
};

export const FeedbackSucces = ({ open, onSubmit, onCancel }: FeedbackSuccesProps) => {
    const dispatch = useAppDispatch();
    return (
        <Modal
            centered
            maskClosable={true}
            open={open}
            onOk={onSubmit}
            onCancel={onCancel}
            footer={null}
            closable={false}
        >
            <Result
                status='success'
                title={<Typography.Title level={3}>Отзыв успешно опубликован</Typography.Title>}
                extra={[
                    <Button
                        type='primary'
                        htmlType='submit'
                        block
                        size='large'
                        onClick={() => dispatch(push('/feedbacks'))}
                    >
                        Отлично
                    </Button>,
                ]}
            ></Result>
        </Modal>
    );
};
