import { Button, Modal, ModalProps, Result } from 'antd';
import { Dispatch, SetStateAction } from 'react';

type FeedbackServerErrorProps = ModalProps & {
    open?: boolean;
    onSubmit?: () => void;
    setOpen?: Dispatch<SetStateAction<boolean>>;
};

export const FeedbackServerError = ({ onCancel, onSubmit, open }: FeedbackServerErrorProps) => {
    return (
        <Modal
            open={open}
            onCancel={onCancel}
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
                    <Button type='primary' onClick={onSubmit}>
                        Назад
                    </Button>
                }
            />
        </Modal>
    );
};
