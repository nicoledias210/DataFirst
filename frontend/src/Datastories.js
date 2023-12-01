import React, { useState, useEffect } from 'react';
import { getDocument } from 'pdfjs-dist/webpack.js';

function Datastories() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const loadPdf = async () => {
            const pdf = await getDocument('/DATA STORY 2.pdf').promise;
            const numPages = pdf.numPages;
            const newImageUrls = [];

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);

                const viewport = page.getViewport({ scale: 2.0 });
                const canvas = document.createElement('canvas');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: canvas.getContext('2d'),
                    viewport: viewport
                };

                await page.render(renderContext).promise;
                newImageUrls.push(canvas.toDataURL());
            }

            setImageUrls(newImageUrls);
        };

        loadPdf();
    }, []);

    return (
        <div>
            {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`PDF Page ${index + 1}`} />
            ))}
        </div>
    );
}

export default Datastories;
