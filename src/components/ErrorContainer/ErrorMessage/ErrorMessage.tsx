import React, { useState } from 'react';
import styles from './ErrorMessage.module.scss';

interface errorMessageInterface {
  error: string
}

function ErrorMessage({ error }: errorMessageInterface): null | React.ReactNode {
  const [errorState, setErrorState] = useState(true);

  if (!errorState) return null;

  const onCloseClick = () => {
    setErrorState(false);
  };

  return (
    <div className={styles.errorMessage}>
      <p className={styles.error}>{error}</p>
      <button type="button" className={styles.close} onClick={onCloseClick} />
    </div>
  );
}

export default ErrorMessage;
