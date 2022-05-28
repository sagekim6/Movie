function MovieInfo({
  id,
  coverImg,
  title,
  rating,
  runtime,
  year,
  description_full,
  genres,
  url,
}) {
  return (
    <div id={id}>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <span>★ : {rating} / </span>
      <span>{runtime} hours / </span>
      <span>{year} year</span>
      <p>{description_full}</p>
      <ul>
        {genres.map((genre, index) => {
          return <li key={index}>{genre}</li>;
        })}
      </ul>
      <a href={url} target="_blank" rel="noreferrer">
        More Info
      </a>
    </div>
  );
}

export default MovieInfo;
