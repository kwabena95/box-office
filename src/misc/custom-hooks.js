import { useReducer, useEffect, useState } from 'react';
import { FETCH_SUCCESS, FETCH_FAILED } from '../reducer/showType';
import { initialState, reducer } from '../reducer/showAction';
import { apiGet } from '../misc/config';




function showsReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            return [...state, action.showId]
        }
        case 'REMOVE': {
            return state.filter((showId) => showId !== action.showId);
        }
        default:
            return state;
    }
}

function usePersistedReducer(reducer, initialState, key) {

    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const persited = localStorage.getItem(key);

        return persited ? JSON.parse(persited) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key]);

    return [state, dispatch];
}

export function useShows(key = 'shows') {
    return usePersistedReducer(showsReducer, [], key);
}

export function useLastQuery(key = 'lastQuery') {
    const [input, setInput] = useState(() => {
        const persited = sessionStorage.getItem(key);

        return persited ? JSON.parse(persited) : '';
    });

    const setPersistedInput = (newState) => {
        setInput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState));
    }
    return [input, setPersistedInput]
}

export function useShow(showId) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
            .then(data => {
                if (isMounted) {
                    dispatch({ type: FETCH_SUCCESS, show: data })
                }
            })
            .catch(err => {
                if (isMounted) {
                    dispatch({ type: FETCH_FAILED, error: err.message })
                }
            });

        return () => {
            isMounted = false;
        }
    }, [showId]);

    return state;
}