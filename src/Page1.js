import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Page1.css'

export const Page1 = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('https://api.spacexdata.com/v4/launchpads')
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="load">
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
      
    )
  }

  return (
    <div>
      {data.map((x) => (
        <div key={x.id} className="card">
          <div className="innerCard">
            <div className="imageAndButton">
              <img src={x.images.large} width="400px" height="300px" />
            </div>
            <div className="cardData">
              <div className="cardDataChid">
                <h2 color="black">Title : {x.full_name}</h2>
                <div className="allbtn">
                  {x.launches.length === 0 ? (
                    <h4>No Any Launchpads Till Now</h4>
                  ) : x.launches.length === 1 ? (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate('/details', { state: x.launches[0] })
                        }}
                      >
                        Launchpad 1
                      </button>{' '}
                      <br />
                    </div>
                  ) : x.launches.length === 2 ? (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate('/details', { state: x.launches[0] })
                        }}
                      >
                        Launchpad 1
                      </button>{' '}
                      <br />
                      <button
                        className="btn"
                        onClick={() => {
                          navigate('/details', { state: x.launches[1] })
                        }}
                      >
                        Launchpad 2
                      </button>{' '}
                      <br />
                    </div>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate('/details', { state: x.launches[0] })
                        }}
                      >
                        Launchpad 1
                      </button>{' '}
                      <br />
                      <button
                        className="btn"
                        onClick={() => {
                          navigate('/details', { state: x.launches[1] })
                        }}
                      >
                        Launchpad 2
                      </button>{' '}
                      <br />
                      <button
                        className="btn"
                        onClick={() => {
                          navigate('/details', { state: x.launches[2] })
                        }}
                      >
                        Launchpad 3
                      </button>{' '}
                      <br />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
