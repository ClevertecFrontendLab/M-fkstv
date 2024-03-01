import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import styles from './Rating.module.css';

type RatingPropsType = {
    rating: number;
};
export const Rating = ({ rating }: RatingPropsType) => {
    return (
        <Rate
            value={rating}
            className={styles.rate}
            character={({ index }) => {
                if (index != undefined)
                    return rating > index ? (
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
    );
};
