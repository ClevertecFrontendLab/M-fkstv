import Lottie from 'lottie-react';
import { defaultOptions } from './loader_options';
import LoaderData from './Loader.json';

import styles from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={styles.root}>
            <Lottie animationData={LoaderData} loop={true} height={150} width={150} />
        </div>
    );
};
