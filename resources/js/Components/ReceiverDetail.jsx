import React, { useContext, useState, useEffect } from "react";
import CalculateAge from "./CalculateAge";
import { useParams } from 'react-router-dom';
import UserContext from "./UserContext";
import Header from "./Header";
import Footer from "./Footer";

export default function ReceiverDetail() {
  const { user } = useContext(UserContext);
  const [receiver, setReceiver] = useState(null);

  // Get the receiver ID from the URL
  const { id } = useParams();

  useEffect(() => {
    
    if (user && id) {
      fetch(`/api/receiver/${id}`)  
        .then((response) => {
          console.log("Response status:", response.status);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          // Log the data to inspect the structure
          console.log('Fetched Receiver Data:', data);

          // Set the receiver state
          setReceiver(data.receiver);
        })
        .catch((error) => console.error('Error fetching receiver:', error));
    }
  }, [user, id]);

  // Check if receiver object is defined
  if (!receiver) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

  // Check if dob property is defined
  const age = receiver.dob ? CalculateAge(receiver.dob) : "N/A";

  return (
    <>
    <Header/>
      <div>
        <h1>{receiver.name}</h1>
        <h2>VS: {receiver.VS_receiver}</h2>
        <div className="detail__place-age">
          <h4>Lives in: {receiver.institution.name}</h4>
          <h4>Age: {age}</h4>
        </div>
        {receiver.media &&
  receiver.media.map((media) => {
    if (media.type === 'profile_pic') {
      return (
        <img
          key={media.id}
          src={"/"+media.path}
          alt={receiver.name}
          style={{ width: '50px', height: '50px' }}
        />
      );
    }
    return null; // or handle other types if needed
  })}
        <h2>About {receiver.name} </h2>
        <p>{receiver.about}</p>
      </div>
      <div>
        <h2>Gallery</h2>
        {receiver.media && receiver.media.length > 0 && (
          <div className="detail__gallery">
            {receiver.media
              .filter((media) => media.type === 'gallery')
              .map((gallery) => (
                <img
                  key={gallery.id}
                  src={"/"+gallery.path}
                  alt={receiver.name}
                  style={{ height: '200px' }}
                />
              ))}
          </div>
        )}

        <h2>Letters</h2>
        {receiver.media && receiver.media.length > 0 && (
          <div className="detail__letters">
            {receiver.media
              .filter((media) => media.type === 'letter')
              .map((letter) => (
                <img
                  key={letter.id}
                  src={"/"+letter.path}
                  alt={receiver.name}
                  style={{ height: '200px' }}
                />
              ))}
          </div>
        )}
        <h2>Sponsorship documents</h2>
        {receiver.media && receiver.media.length > 0 && (
          <div className="detail__documents">
            {receiver.media
              .filter((media) => media.type === 'document')
              .map((document) => (
                <embed
                  key={document.id}
                  src={"/"+document.path}
                  alt={receiver.name}
                  style={{ height: '200px' }}
                />
              ))}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
