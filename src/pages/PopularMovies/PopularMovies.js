import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../../config/config";

const PopularMovies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    FetchPopular();
  }, []);

  const FetchPopular = async () => {
    setIsLoading(true);

    try {
      const trendingData = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      const response = await trendingData.json();
      console.log("result", response);
      setContent(response.results);
      setNumOfPages(response.total_pages);
      setIsLoading(false);
    } catch (errors) {
      console.log("err", errors);
    }
  };

  const loadMore = async (page) => {
    console.log("page", page);
    setPage(page + 1);
    setIsLoading(true)

    try {
      const trendingData = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      const response = await trendingData.json();
      console.log("result", response);
      // var data = content.concat(content, response.results)
      // setContent(data);
      setContent([...content, ...response.results]);
      setNumOfPages(response.total_pages);
      setIsLoading(false)
    } catch (errors) {
      console.log("err", errors);
    }
  };

  useEffect(() => {
    console.log("useEfectPage", page);
  }, [page]);

  if (isLoading === true) {
    return <h3>Loading.............</h3>;
  }

  return (
    <div>
      <div className="container">
        <h3 className="mt-3">Popular Movies</h3>

        {content.map((c, index) => {
          return (
            <div className="toprated-movie mt-3" key={index}>
              <div
                className="card123  mr-3 "
                style={{ width: "200px", borderRadius: "10px" }}
              >
                <img
                  src={
                    c.poster_path ? `${img_300}${c.poster_path}` : unavailable
                  }
                  alt={c.title}
                  height="300px"
                />

                <div className="container">
                  <h6>
                    <b>{c.title.substring(0, 10)}</b>
                  </h6>
                  <p>{c.release_date}</p>
                  <p>
                    Review:<b>{c.vote_average}</b>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <br />
        <p>
          <button
            onClick={() => loadMore(page)}
            type="button"
            style={{
              backgroundColor: "#29B4E4",
              width: "100%",
              color: "white",
            }}
            className="load-more mt-3"
          >
            Load more
          </button>
        </p>
      </div>
    </div>
  );
};

export default PopularMovies;
