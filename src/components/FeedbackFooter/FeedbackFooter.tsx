import { Button, Row, Space } from 'antd';
import styles from './FeedbackFooter.module.css';

type FeedbackFooterProps = {
    onClick: () => void;
    onShowAll: () => void;
    showAll: boolean;
};

export const FeedbackFooter: React.FC<FeedbackFooterProps> = ({ onClick, showAll, onShowAll }) => {
    return (
        <Row>
            <Space
                style={{
                    paddingLeft: 24,
                }}
                size={8}
            >
                <Button
                    onClick={onClick}
                    style={{
                        fontSize: 14,
                    }}
                    className={styles.btn}
                    size='large'
                    type='primary'
                >
                    Написать отзыв
                </Button>
                <Button
                    onClick={onShowAll}
                    style={{
                        fontSize: 16,
                    }}
                    className={styles.btn}
                    size='large'
                    type='link'
                >
                    {!showAll ? 'Развернуть все отзывы' : 'Скрыть отзывы'}
                </Button>
            </Space>
        </Row>
    );
};
