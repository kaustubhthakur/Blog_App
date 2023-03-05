import React from 'react'
import boredApe from "../assets/bored.png"
const Post = () => {
  return (
    <div>
<div className="post">
      <div className="image">

        <img src={boredApe} alt="smokinnn ape" />
      </div>

<div className="texts">
  <h2>Smoking bored ape image</h2>
  <p className="info">
    <a className="author">A'ex Parkinson</a>
    <time>2023 25-02 14:02</time>
  </p>
<p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel quae dolorum quos modi natus cum dicta alias consectetur a, est vero suscipit minima libero numquam dolores nulla optio odio possimus commodi.</p>
 
</div>
   </div>

    </div>
  )
}

export default Post