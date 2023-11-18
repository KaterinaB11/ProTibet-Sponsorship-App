import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function InstitutionDetail() {
    const [institution, setInstitution] = useState(null);

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
    }, []);

    if (!institution) {
        return <div>Loading...</div>; // or handle the loading state appropriately
    }

    return (
        <>
            <Header />
            <div>
                <h1>{institution.name}</h1>

                {institution.media && institution.media.length > 0 && (
                    <div className="detail-inst__profile_pic">
                        {institution.media
                            .filter((media) => media.type === "profile_pic")
                            .map((profilePic) => (
                                <img
                                    key={profilePic.id}
                                    src={"/" + profilePic.path}
                                    alt={institution.name}
                                    style={{
                                        width: "500px",
                                        borderRadius: "2em",
                                    }}
                                />
                            ))}
                    </div>
                )}
                <h2>Location: {institution.location}</h2>
                <h2>About {institution.name}</h2>
                <p>{institution.about}</p>
                <h2>Gallery</h2>
                {institution.media && institution.media.length > 0 && (
                    <div className="detail-inst__gallery">
                        {institution.media
                            .filter((media) => media.type === "gallery")
                            .map((gallery) => (
                                <img
                                    key={gallery.id}
                                    src={"/" + gallery.path}
                                    alt={institution.name}
                                    style={{ height: "200px" }}
                                />
                            ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
