import React from "react";
import CalculateAge from "./CalculateAge";

export default function ReceiverDetail({ receiver }) {
    return (
        <div>
          <h2>{receiver.name}</h2>
          <h4>{receiver.VS_receiver}</h4>
          <h4>{receiver.institution.name}</h4>
          <h4>{receiver.dob}</h4>
          <p>{receiver.about}</p>
        </div>
      );


}