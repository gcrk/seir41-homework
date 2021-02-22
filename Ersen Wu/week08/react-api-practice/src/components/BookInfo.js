import React, {Component} from 'react'

const BookInfo = (props) => {
  return (
    <div>
      <div>
           <div>Book cover:</div>
           <div>
             { <img key={props.image} src={props.image} alt=""/>}
           </div>

           <div>Author:</div>
           <div>
              {props.author}
           </div>

      </div>
       {}
    </div>
  )
}


export default BookInfo;
