import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import NewsDetail from "./NewsDetail";

export default function NewsList() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        console.log("Inside useEffect");

        fetch("/api/news")
            .then((response) => {
                console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("Fetched Data:", data);

                const mediaData = data.media
                    .filter((item) => item.type === "news")
                    .sort((b) => new Date(b.created_at) - new Date());

                setMedia(mediaData);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
            });
    }, []);

    console.log("News state:", media);

    return (
        <>
            <Header />
            <div>
                <h1>News List</h1>
                <div className="news-container">
                    {media.map((newsItem) => (
                        <div key={newsItem.id} className="news-item">
                            <h2>{newsItem.headline}</h2>
                            <img
                                src={newsItem.path}
                                alt="News from India"
                                style={{ width: "300px" }}
                            />
                            <p>{newsItem.name}</p>
                            {/* <NewsDetail newsItem={newsItem}/> */}
                            <button>
                                <Link to={`/news/${newsItem.id}`}>
                                    Read full story
                                </Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
