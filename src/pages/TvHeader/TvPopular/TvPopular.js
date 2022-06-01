import React, { useEffect, useState } from "react";

import { img_300, unavailable } from "../../../config/config";

const TvPopular = (props) => {
    const [content, setContent] = useState([]);


    useEffect(() => {
        FetchTrending();
    }, []);



    const FetchTrending = async () => {
        try {
            const trendingData = await fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
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
            <div className="container mb-5">
                <h3 className="mt-3">Upcoming Movies</h3>

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
                                        <b>{c.name.substring(0, 10)}</b>
                                    </h6>
                                    <p>{c.first_air_date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default TvPopular;
