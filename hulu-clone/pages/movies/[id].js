import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Nav from '../../components/Nav';


function Movie() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <Header />
            <Nav />
            <h1>hello {id}</h1>
        </div>
    )
}

export default Movie;
