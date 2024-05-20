import React, { useState } from 'react';
import "./Style/CoursePage.css";
import { Button } from '@mui/material';
import WriteArticle from './WriteArticle';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  width: '80vw',
  height: '80vh',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'var(--blackColor)',
  border: '2px solid #000',
  boxShadow: 24,
};

function CoursePage({
  isAppBgColorDark
}) {
  const [showModalToWriteArticle, setShowModalToWriteArticle] = useState(false);
    // const search = useQueryParams();
    // const id = new URLSearchParams(search).get("courseId");

    // console.log(search);

  const handleWriteArticleClick = () => setShowModalToWriteArticle(!showModalToWriteArticle);
  const handleWriteArticleClose = () => setShowModalToWriteArticle(false);
  return (
    <div className='article-notebook'>
      <Modal
        open={showModalToWriteArticle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`modal-notebook-section ${isAppBgColorDark ? 'dark-background' : 'white-background'}`}>
            <div className='modal-notebook-close-button-div'>
              <CloseIcon className='clickable' onClick={handleWriteArticleClose}/>
            </div>
            <WriteArticle />
          </div>
        </Box>
      </Modal>
      <Button
        className='notebook-write-button'
        onClick={handleWriteArticleClick}
      >Write</Button>
    </div>
  )
}

export default CoursePage;