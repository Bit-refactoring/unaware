import React, { useState } from 'react';
import { Button } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Style/WriteArticle.css";

const toolIconStyle= { color: '#595252b5' };

function WriteArticle() {
  const [value, setValue] = useState('');

  return (
    <div className='notebook-writing-pad'>
      <Button 
        variant="contained"
        style={{ background: '#ee4b2b' }}
        className='notebook-write-action-button clickable'
      >Save</Button>
      <div className='notebook-writing-space'>
        {/* <span className='notebook-writing-space-tool-bar'>
          <span className='span-button clickable'>B</span>
          <span className='span-button clickable italic-font'>I</span>
          <span className='span-button clickable'>H</span>
          <span className='span-button verticle-divider'></span>
          <span className='span-button clickable'><CodeIcon style={toolIconStyle}/></span>
          <span className='span-button clickable'><FormatIndentDecreaseIcon style={toolIconStyle}/></span>
          <span className='span-button clickable'><FormatIndentIncreaseIcon style={toolIconStyle}/></span>
          <span className='span-button verticle-divider'></span>
          <span className='span-button clickable'><FormatListBulletedIcon style={toolIconStyle}/></span>
          <span className='span-button clickable'><FormatListNumberedIcon style={toolIconStyle}/></span>
          <span className='span-button verticle-divider'></span>
          <span className='span-button clickable'><ImageIcon style={toolIconStyle}/></span>
          
        </span>
        <span className='divider'></span> */}
        <ReactQuill 
          // className='notebook-writing-space-tool-bar' 
          theme="snow" 
          value={value} 
          onChange={setValue}
        />

      </div>
      <div className='notebook-writing-view-space'>
        
      </div>
    </div>
  )
}

export default WriteArticle;