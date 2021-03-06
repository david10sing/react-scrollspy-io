import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  RcioActionsType,
  RcioDispatchContext,
  RcioStateContext,
} from '../react-scrollspy-io-reducer';
import styles from './spy.module.scss';

interface SpyProps {
  top?: number;
}

interface SpyItemProps {
  target: string;
}

export const SpyItem: FC<SpyItemProps> = (props): ReactElement => {
  const { children, target } = props;
  const { intersectingId, ids, ObserverProps } = useContext(RcioStateContext);
  const dispatch = useContext(RcioDispatchContext);

  useEffect(() => {
    /**
     * Add a scroll listender to the document so that when the user reaches
     * the bottom of the page, the last item is set as the active item.
     *
     * This is done because sometimes the last item might not be tall enough
     * to cross the intersection.
     */
    document.addEventListener('scroll', () => {
      if (
        window.scrollY + window.innerHeight ===
        window.document.body.scrollHeight
      ) {
        ids.length &&
          dispatch({
            type: RcioActionsType.setIntersectingId,
            payload: { intersectingId: ids[ids.length - 1] },
          });
      }
    });
  }, [ids, dispatch]);

  const handleClick = () => {
    /**
     * Scroll the section top to the rootMarginTop value
     */
    const targetPosition = document.getElementById(target)?.offsetTop || 0;
    const rootMarginTop: number = parseInt(
      ObserverProps?.rootMargin?.split(' ').shift()?.replace(/\D/g, '') || '0',
      10
    );
    const offsetPosition = Math.round(
      targetPosition - (rootMarginTop / 100) * window.innerHeight
    );
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <ListGroup.Item
      action
      as="li"
      className={styles.scrollspy__item}
      onClick={handleClick}
      active={intersectingId === target}
    >
      {children}
    </ListGroup.Item>
  );
};

const Spy: FC<SpyProps> = (props): ReactElement => {
  const { children, top = 0 } = props;
  return (
    <ListGroup as="ul" className={styles.rcio__spyRoot} style={{ top }}>
      {children}
    </ListGroup>
  );
};

export default Spy;
