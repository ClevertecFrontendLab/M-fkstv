import React from 'react';
import styles from './EmailCheck.module.css';
import VerificationInput from 'react-verification-input';

export const EmailCheck: React.FC = () => {
    return (
        <div className={styles.root}>
            {/* {isCorrect && <Result title={title} />}
        {!isCorrect && <Result title={title} status='error' />} */}
            <p className={styles.subtitle}>
                Мы отправили вам на e-mail <span className={styles.email}>!1111111111111</span>
                <br />
                шестизначный код. Введите его в поле ниже.
            </p>
            <VerificationInput
                // onChange={handleCodeChange}
                // value={value}
                placeholder=''
                validChars='0-9'
                inputProps={{ inputMode: 'numeric' }}
                // onComplete={handleCompleteInput}
                classNames={{
                    container: styles.container,
                    // character: classnames(styles.character, { [styles.incorrect]: !isCorrect }),
                    characterInactive: styles['character__inactive'],
                    characterSelected: styles['character__selected'],
                    characterFilled: styles['character__filled'],
                }}
            />
            <p className={styles.additional}>!!!!!!!!!!!!!!!!!!</p>
        </div>
    );
};
