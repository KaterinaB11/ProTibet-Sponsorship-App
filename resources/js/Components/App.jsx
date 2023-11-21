import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import ReceiversList from "./ReceiversList";
import ReceiverDetail from "./ReceiverDetail";
import { Route, Routes } from "react-router";
import BeforeLoginHomepage from "./BeforeLoginHomepage";
import InstitutionDetail from "./InstitutionDetail";
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";
import Faq from "./Faq";
import Contact from "./Contact";
import AdminUsers from "./Admin/AdminUsers";
import AdminReceivers from "./Admin/AdminReceivers";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<MainContent />} />
                <Route path="/list" element={<ReceiversList />} />
                <Route path="/receiver/:id" element={<ReceiverDetail />} />
                <Route
                    path="/institution/:id"
                    element={<InstitutionDetail />}
                />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/admin/users" element={<AdminUsers />} />
                {/* <Route path="/admin/receivers" element={<AdminReceivers />} /> */}

                <Route path="*" element={<BeforeLoginHomepage />} />
            </Routes>
        </>
    );
}
