import React from "react";


export default function ReceiversList({ receivers, onReceiverClick, onInstitutionClick }){
    return (
        <div>
      <h1>List of Receivers</h1>
      <table>
        <thead>
          <tr>
            <th>Receiver Name</th>
            <th>VS</th>
            <th>Sponsor Name</th>
            <th>Institution</th>
            <th>Profile Pic</th>
          </tr>
        </thead>
        <tbody>
          {receivers.map((receiver) => (
            <tr key={receiver.id} >
              <td onClick={() => onReceiverClick(receiver)}>{receiver.name}</td>
              <td>{receiver.VS_receiver}</td>
              <td>{receiver.user ? receiver.user.first_name : 'N/A'}  {receiver.user ? receiver.user.last_name : 'N/A'}</td>
              <td onClick={() => onInstitutionClick(receiver.institution)}>{receiver.institution ? receiver.institution.name : 'N/A'}</td>
              <td>
                {receiver.media &&
                  receiver.media
                    .filter((media) => media.type === 'profile_pic')
                    .map((profilePic) => (
                      <img
                        key={profilePic.id}
                        src={profilePic.path}
                        alt={receiver.name}
                        style={{ width: '50px', height: '50px' }}
                      />
                    ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}