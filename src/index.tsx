import React, { FC, ReactElement } from 'react';
import styles from './styles.scss';

interface Props {
  test?: string;
}

const Component: FC<Props> = (props): ReactElement => {
  return <div>Hello World!</div>;
};

export default Component;
