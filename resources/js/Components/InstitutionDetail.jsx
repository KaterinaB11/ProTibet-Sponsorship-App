import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../../css/InstitutionDetail.scss";

export default function InstitutionDetail() {
    const [institution, setInstitution] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/institution/${id}`)
            .then((response) => {
                console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("Fetched Institution Data:", data);

                setInstitution(data.institution);
            })
            .catch((error) =>
                console.error("Error fetching institution:", error)
            );
    }, [id]);

    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === institution.media.length - 1 ? prevIndex : prevIndex + 1));
  };

    if (!institution) {
        return <div>Loading...</div>; // or handle the loading state appropriately
    }

    return (
        <>
          <Header />
          <div className="institution-detail">
            <div className="institution-detail__heading">
              <h1>{institution.name}</h1>
            </div>
      
            <div className="institution-detail__pic-about">
              <h2>Location: {institution.location}</h2>
                {institution.media && institution.media.length > 0 && (
                  <div className="institution-detail__profile-pic">
                    {institution.media
                      .filter((media) => media.type === "profile_pic")
                      .map((profilePic) => (
                        <img
                          key={profilePic.id}
                          src={"/" + profilePic.path}
                          alt={institution.name}
                          className="institution-detail__profile-pic-img"
                        />
                      ))}
                  </div>
                )}
                
                <h2>About {institution.name}</h2>
                <p>{institution.about}</p>
            </div>
            <div className="institution-detail__gallery-heading">
              <h2>Gallery</h2>
              
              
            </div>
            {institution.media && institution.media.length > 0 && (
              <div className="institution-detail__gallery">
                <button className="button-for-images" onClick={goToPreviousImage}>&lt;</button>
                <img
                  key={institution.media[currentImageIndex].id}
                  src={"/" + institution.media[currentImageIndex].path}
                  alt={institution.name}
                  className="institution-detail__gallery-img"
                />
                <button className="button-for-images" onClick={goToNextImage}>&gt;</button>
              </div>
            )}
          </div>
          <Footer />
        </>
      );
}
