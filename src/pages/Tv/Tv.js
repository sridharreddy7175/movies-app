import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { img_300, unavailable } from "../../config/config";

const Tv = (props) => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [countResults, setCountResults] = useState("");

    useEffect(() => {
        FetchTrending();
    }, []);

    useEffect(() => { }, [page]);

    const FetchTrending = async () => {
        try {
            const trendingData = await fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
            );
            const response = await trendingData.json();
            console.log("result", response);
            setContent(response.results);
            setCountResults(response.total_results);
        } catch (errors) {
            console.log("err", errors);
        }
    };
    return (
        <div>
            <span className="mt-5 mb-3"></span>
            <SingleContent content={content} />
        </div>
    );
};

export default Tv;
