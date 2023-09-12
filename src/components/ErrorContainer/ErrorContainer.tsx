import React, { useEffect } from 'react';
import { ErrorMessage } from './ErrorMessage';
import styles from './ErrorContainer.module.scss';
import { setErrorState } from "../../redux/reducer/flowerReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

function ErrorContainer(): React.ReactNode {
  const errors = useAppSelector(state => state.flower.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errors?.length > 0){
      const close = setTimeout(() => {
        dispatch(setErrorState([]));
      }, 7000);
      return () => clearTimeout(close);
    }
  }, [errors, dispatch]);

  return (
    <>
      {errors && (
        <div className={styles.container}>
          {errors?.map((error) => (
            <ErrorMessage key={error} error={error} />
          ))}
        </div>
      )}
    </>
  );
}

export default ErrorContainer;
