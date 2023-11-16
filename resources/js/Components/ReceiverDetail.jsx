import React from "react";
import CalculateAge from "./CalculateAge";

export default function ReceiverDetail({ receiver }) {
  const age = CalculateAge(receiver.dob);

  return (
   <>
      <div>
        <h1>{receiver.name}</h1>
        <h2>VS: {receiver.VS_receiver}</h2>
        <div className="detail__place-age">
          <h4>Lives in: {receiver.institution.name}</h4>
          <h4>Age: {age}</h4>
        </div>
        {receiver.media && receiver.media.length > 0 && (
          <div className="detail__profile-pic">
            {receiver.media
              .filter((media) => media.type === 'profile_pic')
              .map((profilePic) => (
                <img
                  key={profilePic.id}
                  src={profilePic.path}
                  alt={receiver.name}
                  style={{ width: '200px', height: '200px', borderRadius: '2em' }}
                />
              ))}
          </div>
        )}
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
                  src={gallery.path}
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
                  src={letter.path}
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
                  src={document.path}
                  alt={receiver.name}
                  style={{ height: '200px' }}
                />
              ))}
          </div>
        )}
      </div>
   </>
  );
}
