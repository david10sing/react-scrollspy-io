import React, { FC, PropsWithChildren, ReactElement, useEffect, useReducer } from 'react';
import { Options } from '@researchgate/react-intersection-observer/typings/types';
// eslint-disable-next-line
// import 'intersection-observer-debugger';
import { RcioActionsType, RcioDispatchContext, RcioReducer, RcioState, RcioStateContext } from './react-scrollspy-io-reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
interface ScrollspyIOProps {
  ObserverProps?: Options;
}

/**
 *
 *
 *
 * <ScrollspyIO>
 *  <Spy>
 *    <Spy.item classes onClick target>When clicking here, the document will scroll and show the top
 *    of the content being spied on at the top of the IO sectionn</Spy.item>
 *  </Spy>
 *  <SpyOn onChange rootMargin>
 *    <div></div>
 *  <SpyOn>
 *
 *
 * </ScrollspyIO>
 *
 */

const initialState: RcioState = { ids: [] };

const ScrollspyIO: FC<PropsWithChildren<ScrollspyIOProps>> = (props: PropsWithChildren<ScrollspyIOProps>): ReactElement => {
  const { children, ObserverProps } = props;
  const [state, dispatch] = useReducer(RcioReducer, initialState);

  useEffect(() => {
    dispatch({
      type: RcioActionsType.setObserverProps,
      payload: { ObserverProps },
    });
  }, [dispatch, ObserverProps]);

  return (
    <RcioDispatchContext.Provider value={dispatch}>
      <RcioStateContext.Provider value={state}>{children}</RcioStateContext.Provider>
    </RcioDispatchContext.Provider>
  );
};

export default ScrollspyIO;
