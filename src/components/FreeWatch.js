import React from "react";
import { useState } from "react";
import Trending from "../pages/Trending/Trending";
import Tv from "../pages/Tv/Tv";

const FreeWatch = () => {
    const [tabs, setTabs] = useState("tv");

    const dataView = (view) => {
        switch (view) {
            case "tv":
                return <Tv />;
            case "movies":
                return <Trending />;
            default:
                return <h1>Stream</h1>;
        }
    };
    const handleStream = (stream) => {
        console.log(stream, "shh");
        setTabs(stream);
    };

    return (
        <div>
            <div className="container mt-2 mb-3">
                <div className="col-header">
                    <h4>Free Watch</h4>
                    <div
                        className="section-a ml-3 pt-2 "
                        style={{
                            display: "flex",
                            border: "2px solid",
                            borderRadius: "49px",
                        }}
                    >
                        <h6>
                            <button
                                className="ml-2 rounded"
                                onClick={() => handleStream("tv")}
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "blue",
                                    outline: "none",
                                }}
                            >
                                {" "}
                                Tv
                            </button>
                        </h6>
                        <h6>
                            <button
                                className="ml-2 rounded"
                                onClick={() => handleStream("movies")}
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "blue",
                                    outline: "none",
                                }}
                            >
                                {" "}
                                Movies
                            </button>
                        </h6>
                    </div>
                </div>
            </div>
            {dataView(tabs)}
        </div>
    );
};

export default FreeWatch;
