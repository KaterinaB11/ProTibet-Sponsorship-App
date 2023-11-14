import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import ReceiversList from './ReceiversList';
import ReceiverDetail from './ReceiverDetail';

export default function App() {
  const [receivers, setReceivers] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  useEffect(() => {
    // Fetch receivers from your API
    // Update the URL and headers as needed
    fetch('/api/receivers')
      .then((response) => response.json())
      .then((data) => setReceivers(data.receivers))
      .catch((error) => console.error('Error fetching receivers:', error));
  }, []);

  const handleReceiverClick = (receiver) => {
    setSelectedReceiver(receiver);
  };
  console.log('Selected Receiver:', selectedReceiver);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <ReceiversList receivers={receivers} onReceiverClick={handleReceiverClick} />
      </div>
      <div>
      {selectedReceiver && <ReceiverDetail receiver={selectedReceiver} />}
      </div>
    </>
  );
}