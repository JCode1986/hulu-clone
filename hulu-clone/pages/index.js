import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home( { results } ) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

//server side rendering (next.js); this will get executed before client
export async function getServerSideProps(context) {
  //pull genre from url
  const genre = context.query.genre;
  console.log(genre, "what is this?")
  //request to database
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrendingMovies.url}`
  ).then((res) => res.json());

    //ready for client side
    return {
      props: {
        results: request.results
      }
    }
}

//https://api.themoviedb.org/3 /discovery/movie?api_key=3c0fcb1078fa491f0e484d9bce020d97&with_genres=10770