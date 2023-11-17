import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import ReceiversList from './ReceiversList';
import ReceiverDetail from './ReceiverDetail';
import { Route, Routes } from 'react-router';
import BeforeLoginHomepage from './BeforeLoginHomepage';
import InstitutionDetail from './InstitutionDetail';
import NewsList from './NewsList';

export default function App() {
  

  return (
    <>
    <Routes>
      <Route path="/home" element={ <MainContent/> } />
      <Route path="/list" element={ <ReceiversList/> } />
      <Route path="/receiver/:id" element={<ReceiverDetail />} /> 
      <Route path="/institution/:id" element={<InstitutionDetail />} /> 
      <Route path="/news" element={ <NewsList/> } />

      <Route path="*" element={ <BeforeLoginHomepage/> } />
    </Routes>
    </>
  );
}