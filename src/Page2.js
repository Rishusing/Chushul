import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './Page2.css'

export const Page2 = () => {
  const location = useLocation();
  // console.log(location.state)
  const id = location.state;

  const [launch, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
        const fetchData = async() => {
            await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
                .then((res) => {
                  setData(res.data)
                  // launch.date_utc = format(launch.date_utc, "fullDate");
                  setLoading(false)
                })
        }
        fetchData();
    }, [])
    
    if (isLoading)
    {
        return <div className="load">
          <div className="middle">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
          <div className="bar bar7"></div>
          <div className="bar bar8"></div>
        </div>
      </div>
    }


  return (
    <div className="main">
      <div className="container">
        <img className="logo" src={launch.links.patch.small} />
        <div>
          <h2 className="name">
            {launch.name}
          </h2>
          <p className="detail">
            {launch.details}
          </p>
          <h3 className="date">
            Date : {launch.date_utc}
          </h3>
          <div className="reused">
            {launch.fairings.reused ?
              <h3>
                Reused : YES
              </h3> :
              <h3>
                Reused : NO
              </h3>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
