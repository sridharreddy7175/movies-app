import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { img_300, unavailable } from "../../config/config";

const Trending = (props) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [countResults, setCountResults] = useState("")


  useEffect(() => {
    FetchTrending();
  }, []);

  useEffect(() => { }, [page]);

  const FetchTrending = async () => {
    try {
      const trendingData = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      const response = await trendingData.json();
      console.log("result", response);
      setContent(response.results);
      setCountResults(response.total_results)
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

export default Trending;
