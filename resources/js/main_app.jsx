import React from 'react';
import { createRoot } from 'react-dom/client';

import Main from "./Components/Main";

export default function MainApp(){
    return (
        <Main/>
    )
}

const container = document.getElementById('main-app');
const root = createRoot(container);
root.render(<MainApp />);

