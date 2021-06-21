import { useReducer, useEffect } from "react";
import { useParams } from "react-router";
import { apiGet } from '../misc/config';
import { Loader } from '../misc/Loader';
import { FETCH_SUCCESS, FETCH_FAILED } from '../reducer/showType';
import { initialState, reducer } from '../reducer/showAction';


const ShowDetail = () => {

    const { id } = useParams();

    const [{ show, isLoading, error }, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
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
    }, [id]);

    if (isLoading) {
        return Loader();
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {console.log(show)}
            show detail
        </div>
    )
}

export default ShowDetail
