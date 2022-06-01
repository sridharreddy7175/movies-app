import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin, AiFillGoogleCircle } from "react-icons/ai";

export const Footer = () => {
    return (
        <div>
            <div className="footer1">
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-3 footer2 text-left">
                            <h6 className="text-white">
                                <a href="/" className="text-white">
                                    THE BASICS
                                </a>
                            </h6>
                            <a href="https://www.themoviedb.org/about">
                                <p className="text-white mt-3">About TMDB</p>
                            </a>
                            <a href="/">
                                {" "}
                                <p className="text-white mt-3">Contact Us</p>
                            </a>

                            <p className="text-white mt-2">
                                <a
                                    href="https://www.themoviedb.org/talk"
                                    className="text-white"
                                >
                                    Support Forums
                                </a>
                            </p>
                            <a href="https://www.themoviedb.org/documentation/api">
                                {" "}
                                <p className="text-white mt-3">API</p>
                            </a>
                            <a href="https://status.themoviedb.org/">
                                {" "}
                                <p className="text-white mt-3">System Status</p>
                            </a>
                        </div>
                        <div className="col-md-3 footer2 text-left">
                            <h6 className="text-white">GET INVOLVED</h6>

                            <a href="https://www.themoviedb.org/bible" className="mt-4">
                                <p className="text-white">Contribution Bible</p>
                            </a>
                            <a href="https://www.themoviedb.org/movie/new" className="mt-2">
                                <p className="text-white">Add New Movie</p>
                            </a>
                            <a href="https://www.themoviedb.org/tv/new" className="mt-2">
                                <p className="text-white">Add New TV Show</p>
                            </a>
                        </div>

                        <div className="col-md-3 footer2 text-left pb-3">
                            <h5 className="text-white">COMMUNITY</h5>
                            <a
                                href="https://www.themoviedb.org/documentation/community/guidelines"
                                className="mt-2"
                            >
                                <p className="text-white">Guidelines</p>
                            </a>
                            <a href="https://www.themoviedb.org/discuss" className="mt-2">
                                <p className="text-white">Discussions</p>
                            </a>
                            <a href="https://www.themoviedb.org/leaderboard" className="mt-2">
                                <p className="text-white">LeaderBoard</p>
                            </a>
                            <h3 className="mt-2 text-white">Follow Us</h3>
                            <span className="text-white" style={{ fontSize: "20px" }}>
                                <FaFacebook />
                            </span>
                            &nbsp;&nbsp;
                            <span className="text-white" style={{ fontSize: "20px" }}>
                                <AiFillTwitterCircle />
                            </span>
                            &nbsp;&nbsp;
                            <span className="text-white" style={{ fontSize: "20px" }}>
                                <AiFillLinkedin />
                            </span>
                            &nbsp;&nbsp;
                            <span className="text-white" style={{ fontSize: "20px" }}>
                                <AiFillGoogleCircle />
                            </span>
                        </div>
                        <div className="col-md-3 footer2 text-left">
                            <h6 className="text-white">LEGAL</h6>

                            <a
                                href="https://www.themoviedb.org/terms-of-use"
                                className="mt-4"
                            >
                                <p className="text-white">Terms of Use</p>
                            </a>
                            <a
                                href="https://www.themoviedb.org/documentation/api/terms-of-use"
                                className="mt-2"
                            >
                                <p className="text-white">API Terms of Use</p>
                            </a>

                            <a
                                href="https://www.themoviedb.org/privacy-policy"
                                className="mt-2"
                            >
                                <p className="text-white">Privacy Policy</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer3">
                <div className="p-3 mb-2 bg-dark text-white">
                    <div className="container">
                        <h6>© 2022 Deva | All Rights Reserved | Movies</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};
