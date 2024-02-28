import Lottie from 'lottie-react';
import LoaderData from './Loader.json';

import styles from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={styles.root} data-test-id='loader'>
            <Lottie animationData={LoaderData} loop={true} height={150} width={150} />
        </div>
    );
};
