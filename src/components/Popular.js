import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../config/config";
import Trending from "../pages/Trending/Trending";
import HomeRentSider from "./HomeRentSider/HomeRentSider";
import HomeThearterSider from "./HomeThearterSider/HomeThearterSider";
import HomeTvSider from "./Hometvsider/HomeTvSider";

const Popular = () => {
    const [tabs, setTabs] = useState("stream");

    const dataView = (view) => {
        switch (view) {
            case "stream":
                return <Trending />;
            case "tvs":
                return <HomeTvSider />
            case "theater":
                return <HomeThearterSider />
            case "rents":
                return <HomeRentSider />;
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
            <div className="container mt-5 mb-3">
                <div className="col-header">
                    <h4>What's Popular</h4>
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
                                onClick={() => handleStream("stream")}
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "blue",
                                    outline: "none",
                                }}
                            >
                                {" "}
                                Streaming
                            </button>
                        </h6>
                        <h6>
                            <button className="ml-4 mr-2 rounded" onClick={() => handleStream("tvs")}
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "blue",
                                    outline: "none",
                                }}
                            >
                                {" "}
                                On Tv
                            </button>
                        </h6>
                        <h6>
                            <button
                                className="ml-4 mr-2 rounded"
                                onClick={() => handleStream("theater")}
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "blue",
                                    outline: "none",
                                }}
                            >
                                {" "}
                                In Theater
                            </button>
                        </h6>
                        <h6>
                            <button
                                className="ml-4 mr-2 rounded"
                                onClick={() => handleStream("rents")}
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "blue",
                                    outline: "none",
                                }}
                            >
                                {" "}
                                For Rent
                            </button>
                        </h6>

                    </div>
                </div>
            </div>
            {dataView(tabs)}
        </div>
    );
};

export default Popular;
