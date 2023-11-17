import React, { useEffect, useState, useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

export default function ReceiversList() {

  const { user } = useContext(UserContext);
console.log("User:", user);
  const [receivers, setReceivers] = useState([]);
  

  // Get user information from context
  

  useEffect(() => {
    console.log("Inside useEffect");
    
    // Check if 'user' is truthy before making the API call
    if (user) {
      console.log("User exists:", user);
  
      fetch('/api/receivers')
        .then((response) => {
          console.log("Response status:", response.status);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          return response.json();
        })
        .then((data) => {
          // Log the data to inspect the structure
          console.log('Fetched Data:', data);
  
          // Filter receivers based on user_id
          const userReceivers = data.receivers.filter(receiver => receiver.user_id === user.id);
          setReceivers(userReceivers);
        })
        .catch((error) => console.error('Error fetching receivers:', error));
    }
    else {
      console.log("User is null or undefined");
    }
  }, [user]);
  

  return (
    <div>
      <h1>People in my support</h1>
      <table>
        <thead>
          <tr>
            <th>Receiver Name</th>
            <th>VS</th>
            <th>Institution</th>
            <th>Profile Pic</th>
          </tr>
        </thead>
        <tbody>
          {receivers && receivers.length > 0 ? (
            receivers.map((receiver) => (
              <tr key={receiver.id}>
                <td>
                  <Link to={`/receiver/${receiver.id}`}>
                    {receiver.name}
                  </Link>
                </td>
                <td>{receiver.VS_receiver}</td>
                <td>
                  <Link to={`/institution/${receiver.institution.id}`}>
                    {receiver.institution ? receiver.institution.name : 'N/A'}
                  </Link>
                </td>
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
            ))
          ) : (
            <tr>
              <td colSpan="5">No receivers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
