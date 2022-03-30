import React from 'react'
import { Link } from "react-router-dom";
import Tv from '../pages/Tv/Tv';


const FreeWatch = () => {
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
                            <Link className="ml-1">Movies</Link>
                        </h6>
                        <h6>
                            <Link className="ml-4">Tv</Link>
                        </h6>

                    </div>
                </div>
            </div>
            <Tv />
        </div>
    )
}

export default FreeWatch
