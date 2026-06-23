import React from 'react'
import {Bookmark} from 'lucide-react'

function Card(props){
  return (
   <div className='card'>
      <div className="top">
        <img src="https://cdn.vectorstock.com/i/500p/39/87/amazon-icon-black-and-white-vector-34243987.jpg" alt="" />
        <button>Save <Bookmark/></button>

      </div>
      <div className="center">
         <h3>Amazon <span>5 Days ago</span></h3>
         <h2>Senior UI/Ux Designer</h2>
         <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
         </div>
      </div>
      <div className="bottom">
       <div>
        <div>
          <h3>$120/Per Hour</h3>
          <p>Mumbai </p>
        </div>
       </div>
      </div>
      </div>
  )
}

export default Card;
