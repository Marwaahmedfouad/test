import React from 'react'
import parse from 'html-react-parser';

function ResumeItem({icon,year,title,desc}) {
  return (
    <>
      <div className="resume__item">
        <div className="resume__icon">{icon}</div>
        
        <span className='resume__date'>{year}</span>
        {/* Using parse to render HTML content */}
        <h3 className='resume_subtitle'>{parse(title)}</h3>
        <p className="resume__description">{desc}</p>
      </div>
    </>
  )
}

export default ResumeItem
