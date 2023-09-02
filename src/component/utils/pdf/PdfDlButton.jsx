import React from 'react';
import { saveAs } from 'file-saver';


const PdfDownloadButton = () => {
  const handleDownloadClick = () => {
    
    const pdfFile = './files/CV.pdf';

    
    saveAs(pdfFile, 'cv_Muller_Vincent.pdf');
  };

  return (
    <div>
      <button onClick={handleDownloadClick} className='pdfButton'>Télécharger mon CV</button>
    </div>
  );
};

export default PdfDownloadButton;
