import styled from "@emotion/styled";

function Card({ movie }) {
  const { API_URL } = process.env;

  return (
    <CardStyled>
      <div className="poster">
        <img
          className="movie__poster"
          src={API_URL + movie.poster.url}
          alt=""
        />
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid lightblue;
  margin-top: 50px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }
    .movie__poster {
      object-fit: none;
    }
  }
`;

export default Card;
