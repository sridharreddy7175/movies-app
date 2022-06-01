import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchMovies from "../pages/Search/SearchMovies";
import { Link, useHistory } from "react-router-dom";

const SideHeader = (props) => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const history = useHistory();

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );

            console.log("tv", data);
            setContent(data.results);
            history?.push("/search", { content: data.results });
            // setNumOfPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);

    return (
        <div className="banner-img">
            <div className="container pt-5 pb-5">
                <h1 className="text-white">Welcome.</h1>
                <h3 className="text-white">
                    Millions of movies, TV shows and people to discover. Explore now.
                </h3>
                <div className="pt-5">
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Search for a movie,tv show,person ......"
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <button
                        className="btn btn-outline-success my-2 my-sm-0 mt-3"
                        type="submit"
                        onClick={fetchSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideHeader;
