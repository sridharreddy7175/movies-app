import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../../config/config";


const UpComingMovies = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    FetchPopular();
  }, []);

  const FetchPopular = async () => {
    try {
      const trendingData = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&IN&page=1`
      );
      const response = await trendingData.json();
      console.log("result", response);
      setContent(response.results);
    } catch (errors) {
      console.log("err", errors);
    }
  };
  return (
    <div>
      <div className="container-fluid mb-5">
        <h3 className="mt-3">Upcoming Movies</h3>

        <div className="row">
          <div className="col-md-3">Hello</div>
          <div class="col-md-9">
            {content.map((c) => {
              return (
                <div className="toprated-movie mt-3">
                  <div className="card123  mr-3 " style={{ width: "200px", borderRadius: "10px" }}>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default UpComingMovies;
