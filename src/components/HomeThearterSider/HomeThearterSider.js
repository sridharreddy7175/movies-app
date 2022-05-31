import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { img_300, unavailable } from "../../config/config";

function HomeThearterSider(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    console.log("hello");

    const [content, setContent] = useState([]);
    useEffect(() => {
        FetchPopular();
    }, []);

    const FetchPopular = async () => {
        try {
            const trendingData = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
            );
            const response = await trendingData.json();
            console.log("result", response);
            setContent(response.results);
        } catch (errors) {
            console.log("err", errors);
        }
    };

    return (
        <div className="">
            <Carousel
                swipeable={false}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlay={true}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {content?.map((c) => {
                    return (
                        <div className="" key={c.id}>
                            <div className="text-center">
                                <img
                                    src={
                                        c.poster_path ? `${img_300}${c.poster_path}` : unavailable
                                    }
                                    alt={c.title}
                                    height="250px"
                                    width="180px"
                                    style={{ borderRadius: "10px" }}
                                />
                                <h6 className="mt-1">
                                    <b>{c.title || c.name}</b>
                                </h6>

                                <span className="mt-2">
                                    {c.release_date || c.first_air_date}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default HomeThearterSider;
