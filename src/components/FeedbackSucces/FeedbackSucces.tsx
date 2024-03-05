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
        <Modal open={open} onOk={onSubmit} onCancel={onCancel}>
            <Result
                status='success'
                title={<Typography.Title level={2}>pft,wf</Typography.Title>}
                subTitle='сосамба'
                extra={[
                    <Button
                        type='primary'
                        htmlType='submit'
                        block
                        size='large'
                        // data-test-id='registration-enter-button'
                        onClick={() => dispatch(push('/feedback'))}
                    >
                        c
                    </Button>,
                ]}
            ></Result>
        </Modal>
    );
};
