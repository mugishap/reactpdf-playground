import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ReactPDF.tsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ReactPDF from './ReactPDF.tsx'
import ReactPDFViewer from './ReactPDFViewer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/react-pdf"} />} />
      <Route path="/react-pdf" element={<ReactPDF />} />
      <Route path="/react-pdf-viewer" element={<ReactPDFViewer />} />
    </Routes>
  </BrowserRouter>
)
