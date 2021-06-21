import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { apiGet } from '../misc/config';

const ShowDetail = () => {

    const { id } = useParams();

    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(data => {
                if (isMounted) {
                    setShow(data);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message);
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        }
    }, [id]);

    if (isLoading) {
        return <div>loading...</div>
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
