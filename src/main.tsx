import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ReactPDF from './ReactPDF.tsx'
import ReactPDFViewer from './ReactPDFViewer.tsx'
import './index.css'
import ReactDocViewer from './ReactDocViewer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to={"/react-pdf-viewer"} />} />
      <Route path="/react-pdf" element={<ReactPDF />} />
      <Route path="/react-pdf-viewer" element={<ReactPDFViewer />} />
      <Route path="/react-doc-viewer" element={<ReactDocViewer />} />
    </Routes>
  </BrowserRouter>
)
