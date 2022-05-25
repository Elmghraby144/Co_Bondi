import React from 'react'
import team_1 from "../images/team-1.png"
import team_2 from "../images/team-2.png"
import team_3 from "../images/team-3.png"
import team_4 from "../images/team-4.png"

const Our_Team = () => {
  return (
    <div className="team text-center pb-5 pt-5">
      <div className="container pb-5 pt-5">
        <h2 className='fw-bold'>Meet The Team</h2>
        <p className='text-black-50 mb-5'>
          Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. 
          Proin eget tortor risus. Donec sollicitudin molestie malesuada.
        </p>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className='img-fluid' src={team_1} alt="Team" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className='img-fluid' src={team_2} alt="Team" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className='img-fluid' src={team_3} alt="Team" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className='img-fluid' src={team_4} alt="Team" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Our_Team;
