import { useParams } from 'react-router-dom';

function CourseDele() {

    const { id } = useParams();

    return(
        <>
            <h1>{id}</h1>
        </>
    )
}

export default CourseDele;