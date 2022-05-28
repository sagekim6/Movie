import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieInfo from "../component/MovieInfo";

function Details() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await res.json();
      setDetails([json.data.movie]);
      setLoading(false);
    };
    getDetails();
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        details.map((detail) => {
          return (
            <MovieInfo
              key={detail.id}
              coverImg={detail.large_cover_image}
              title={detail.title}
              rating={detail.rating}
              runtime={detail.runtime}
              year={detail.year}
              description_full={detail.description_full}
              genres={detail.genres}
              url={detail.url}
            />
          );
        })
      )}
    </>
  );
}

export default Details;
