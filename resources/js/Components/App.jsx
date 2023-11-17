import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import ReceiversList from './ReceiversList';
import ReceiverDetail from './ReceiverDetail';
import { Route, Routes } from 'react-router';
import BeforeLoginHomepage from './BeforeLoginHomepage';
import InstitutionDetail from './InstitutionDetail';

export default function App() {
  

  return (
    <>
    <Routes>
      <Route path="/home" element={ <MainContent/> } />
      <Route path="/list" element={ <ReceiversList/> } />
      <Route path="/receiver/:id" element={<ReceiverDetail />} /> 
      <Route path="/institution/:id" element={<InstitutionDetail />} /> 
      <Route path="*" element={ <BeforeLoginHomepage/> } />
    </Routes>
    
      {/* <div>
        <ReceiversList receivers={receivers} onReceiverClick={handleReceiverClick} onInstitutionClick={handleInstitutionClick} />
      </div>
      <div>
      {selectedReceiver && <ReceiverDetail receiver={selectedReceiver} />}
      {selectedInstitution && <InstitutionDetail institution={selectedInstitution} />}
      </div> */}
    </>
  );
}