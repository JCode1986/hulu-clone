import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
const API_KEY = process.env.API_KEY;


function Movie() {
    const router = useRouter();
    const { id } = router.query;
    let backdrop_path, budget, original_language, title, overview, status, vote_average, vote_count

    //API key variable not working
    const data = async (id)  => {
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => console.log(data))
      }

    console.log(data(id), "what is this?")

    return (
        <div>
            <Header />
            <Nav />
            <h1>hello {id}</h1>

        </div>
    )
}

export default Movie;
