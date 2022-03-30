import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../config/config";
import Trending from "../pages/Trending/Trending";

const Popular = () => {

    const handleTv = () => {
        console.log("hello")
    }



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
                            <Link className="ml-1">Streaming</Link>
                        </h6>
                        <h6>
                            <Link className="ml-4" onClick={handleTv}>On Tv</Link>
                        </h6>
                        <h6>
                            <Link className="ml-4">For Rent</Link>
                        </h6>
                        <h6>
                            <Link className="ml-4 mr-2">In Theater</Link>
                        </h6>
                    </div>
                </div>
            </div>
            <Trending />

        </div>
    );
};

export default Popular;
