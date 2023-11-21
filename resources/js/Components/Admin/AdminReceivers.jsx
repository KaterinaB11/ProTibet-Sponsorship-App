import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminReceivers()  {
  const [receivers, setReceivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all receivers when the component mounts
    fetchReceivers();
  }, []);

  const fetchReceivers = async () => {
    try {
      const response = await axios.get("/api/all_receivers");
      setReceivers(response.data.receivers);
    } catch (error) {
      console.error("Error fetching receivers:", error);
    }
  };

  const handleSearch = async () => {
    try {
      // Fetch receivers based on the search term
      const response = await axios.get(`/api/search_receivers?name=${searchTerm}`);
      setReceivers(response.data.receivers);
    } catch (error) {
      console.error("Error searching receivers:", error);
    }
  };

  return (
    <div>
      <h1>Admin Receivers</h1>
      {/* Search box */}
      <input
        type="text"
        placeholder="Search receivers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      
    </div>
  );

};


