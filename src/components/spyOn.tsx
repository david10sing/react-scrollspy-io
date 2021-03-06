import React, { PropsWithChildren, useContext, useEffect } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { Unobserve } from '@researchgate/react-intersection-observer/typings/types';
import {
  RcioActionsType,
  RcioDispatchContext,
  RcioStateContext,
} from '../react-scrollspy-io-reducer';

const SpyOn = (
  props: PropsWithChildren<{
    id: string;
  }>
) => {
  const { children, id } = props;
  const { ObserverProps } = useContext(RcioStateContext);
  const dispatch = useContext(RcioDispatchContext);

  useEffect(() => {
    /**
     * Dispatch the id of the item being spied on
     * to be appended to a list of ids being spied on
     */
    dispatch({
      type: RcioActionsType.addId,
      payload: { id },
    });
  }, [id, dispatch]);

  const handleOnChange = (
    e: IntersectionObserverEntry,
    unobserve: Unobserve
  ) => {
    if (e.isIntersecting) {
      const targetId = id;
      dispatch({
        type: RcioActionsType.setIntersectingId,
        payload: { intersectingId: targetId },
      });
    }
    typeof ObserverProps?.onChange === 'function' &&
      ObserverProps.onChange(e, unobserve);
  };

  return (
    <Observer {...ObserverProps} onChange={handleOnChange}>
      <div>{children}</div>
    </Observer>
  );
};

export default SpyOn;
