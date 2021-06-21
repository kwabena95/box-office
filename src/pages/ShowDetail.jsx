import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { apiGet } from '../misc/config';

const ShowDetail = () => {

    const { id } = useParams();

    const [show, setShow] = useState(null);

    useEffect(() => {

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(data => {
                setShow(data)
            });

    }, [id]);

    return (
        <div>
            {console.log(show)}
            show detail
        </div>
    )
}

export default ShowDetail
