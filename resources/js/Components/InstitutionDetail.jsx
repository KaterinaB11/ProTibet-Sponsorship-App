import React from "react";

export default function InstitutionDetail({ institution }) {
  console.log("Institution Detail Data:", institution.media);

  return (
    <div>
      <h1>{institution.name}</h1>
      
      {institution.media && institution.media.length > 0 && (
          <div className="detail-inst__profile_pic">
            {institution.media
              .filter((media) => media.type === 'profile_pic')
              .map((profilePic) => (
                <img
                  key={profilePic.id}
                  src={profilePic.path}
                  alt={institution.name}
                  style={{ width: '500px', borderRadius: '2em' }}
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
              .filter((media) => media.type === 'gallery')
              .map((gallery) => (
                <img
                  key={gallery.id}
                  src={gallery.path}
                  alt={institution.name}
                  style={{ height: '200px' }}
                />
              ))}
          </div>
        )}

    </div>
  );
}
