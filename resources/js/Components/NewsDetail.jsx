import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../css/NewsDetail.scss"

export default function NewsDetail({ newsItemProp }) {
    console.log("News Detail Data:", newsItemProp);
    const { id } = useParams();
    const [newsItem, setnewsItem] = useState(null);

    useEffect(() => {
        // Fetch data for the specific news item based on the id
        fetch(`/api/news/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setnewsItem(data.media); // Assuming the API response structure
            })
            .catch((error) => {
                console.error("Error fetching news detail:", error);
            });
    }, [id]);

    if (!newsItem) {
        // You can render a loading indicator or an error message here
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <div className="news-detail-container">
                <div className="news-detail__heading"><h1>News from {newsItem.institution.name}</h1></div>
               <div className="news-detail__img-about">
                    <h2>{newsItem.headline}</h2>
                    <img
                        src={"/" + newsItem.path}
                        alt="News from India"
                        style={{ width: "600px" }}
                    />
                    <p>{newsItem.description}</p>
               </div>
                
            </div>
            <Footer />
        </>
    );
}
