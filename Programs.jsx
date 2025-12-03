import React from 'react'
import './Programs.css'
import program_1 from '../../../assets/program-1.png'
import program_2 from '../../../assets/program-2.png'
import program_3 from '../../../assets/program-3.png'
import program_icon_1 from '../../../assets/program-icon-1.png'
import program_icon_2 from '../../../assets/program-icon-2.png'
import program_icon_3 from '../../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program"> <img src={program_1} alt=''/>
       <div className="caption">
        <img src={program_icon_1} alt=''/>
        <h3> SCIENCE </h3>
        <p>  Physics, Chemistry, Biology, and Mathematics courses preparing students 
          for medical and engineering entrance exams. </p>
        </div>
         </div>
      <div className="program"> <img src={program_2} alt=''/> 
       <div className="caption">
        <img src={program_icon_2} alt=''/>
        <h3> COMMERCE </h3>
       <p> Accounting, Economics, and Business Studies with integrated CA
         Foundation coaching for aspiring chartered accountants.</p>
        </div>
         </div>
      <div className="program"> <img src={program_3} alt=''/> 
       <div className="caption">
        <img src={program_icon_3} alt=''/>
        <h3> ARTS </h3>
       <p> History, Political Science, Sociology, and Literature courses 
        fostering critical thinking and cultural awareness.</p>
        </div>
         </div>
    </div>
  )
}

export default Programs
