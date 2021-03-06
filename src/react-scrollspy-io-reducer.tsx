import { ChangeHandler, Options } from '@researchgate/react-intersection-observer/typings/types';
import React from 'react';

export const RcioStateContext: React.Context<RcioState> = React.createContext(null);
export const RcioDispatchContext: React.Context<React.Dispatch<RcioActions>> = React.createContext(null);

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum RcioActionsType {
  'addId',
  'setIntersectingId',
  'setObserverProps',
}

type Payload = {
  [RcioActionsType.addId]: {
    id: string;
  };
  [RcioActionsType.setIntersectingId]: {
    intersectingId: string;
  };
  [RcioActionsType.setObserverProps]: {
    ObserverProps?: Options;
  };
};

export type RcioState = {
  ObserverProps?: Options & {
    onChange?: ChangeHandler;
  };
  intersectingId?: string;
  ids: string[];
};

export type RcioActions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const RcioReducer = (state: RcioState, action: RcioActions) => {
  switch (action.type) {
    case RcioActionsType.addId:
      return {
        ...state,
        ids: [...state.ids, action.payload.id],
      };
    case RcioActionsType.setIntersectingId:
      return {
        ...state,
        intersectingId: action.payload.intersectingId,
      };
    case RcioActionsType.setObserverProps:
      return {
        ...state,
        ObserverProps: action.payload.ObserverProps,
      };
    default:
      return state;
  }
};
