import { Button, Grid, Modal, ModalProps, Result, Typography } from 'antd';
import { Dispatch, SetStateAction } from 'react';

type FeedbackErrorProps = ModalProps & {
    open: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    onSubmit: () => void;
};

import styles from './FeedbackError.style.module.css';

export const FeedbackError = ({ open, onSubmit, onCancel }: FeedbackErrorProps) => {
    const { useBreakpoint } = Grid;
    const breakpoint = useBreakpoint();
    return (
        <Modal
            centered
            maskClosable={true}
            onOk={onSubmit}
            onCancel={onCancel}
            open={open}
            footer={null}
            closable={false}
        >
            <Result
                status='error'
                title={<Typography.Title level={3}>Данные не сохранились</Typography.Title>}
                subTitle='Что-то пошло не так. Попробуйте ещё раз.'
                extra={[
                    <div className={styles.root}>
                        <Button
                            style={
                                breakpoint.sm
                                    ? { width: 144, fontSize: 14 }
                                    : { width: 180, fontSize: 14 }
                            }
                            type='primary'
                            key='newReview'
                            onClick={onSubmit}
                            data-test-id='write-review-not-saved-modal'
                        >
                            Написать отзыв
                        </Button>
                        ,
                        <Button
                            style={
                                breakpoint.sm
                                    ? { width: 144, fontSize: 14 }
                                    : { width: 180, fontSize: 14 }
                            }
                            type='default'
                            key='close'
                            onClick={onCancel}
                        >
                            Закрыть
                        </Button>
                    </div>,
                ]}
            />
        </Modal>
    );
};
