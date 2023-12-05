import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import * as React from 'react';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

const ReactPDFViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const bookmarkPluginInstance = bookmarkPlugin();
    const toolbarPluginInstance = toolbarPlugin();

    const [fileuploaded, setFileUploaded] = React.useState(false)
    const [file, setFile] = React.useState<string | null>(null)

    const uploadFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            setFile(e.target.result)
            setFileUploaded(true)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className='bg-white min-h-screen '>
            <input type="file" onChange={uploadFile} id='pdf-file' />
            {
                fileuploaded && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div
                            // style={{
                            //     height: '750px',
                            //     width: '900px',
                            //     marginLeft: 'auto',
                            //     marginRight: 'auto',
                            // }}
                        >
                            <Viewer fileUrl={file as string} plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance, bookmarkPluginInstance,toolbarPluginInstance]} />
                        </div>
                    </Worker>
                )}
        </div>
    );
};

export default ReactPDFViewer;