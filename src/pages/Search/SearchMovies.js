import React from 'react'
import { useEffect, useState } from "react";
import { img_300, unavailable } from "../../config/config";
import axios from "axios";
const SearchMovies = (props) => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
            setContent(data.results);
            // setNumOfPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);

    console.log("Props movies", props)

    const loadMore = () => {

    }

    return (
        <div>
            <div>
                <div className="container">
                    <h3>Search Movies</h3>

                    {props?.location?.state?.content.map((c) => {
                        return (
                            <div className="toprated-movie">
                                <div className="card123 mb-3 mr-3 mt-5">
                                    <img
                                        src={
                                            c.poster_path
                                                ? `${img_300}${c.poster_path}`
                                                : unavailable
                                        }
                                        alt={c.title}
                                        height="300px"
                                    />
                                    <div className="container">
                                        <h6>
                                            <b>{c.title.substring(0, 10)}</b>
                                        </h6>
                                        <p>{c.release_date || 1978 - 12 - 21}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}


                    <button onClick={loadMore} type="button" className="load-more">Load more</button>
                </div>
            </div>

        </div>
    )
}

export default SearchMovies
