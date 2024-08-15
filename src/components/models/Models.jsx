import React from 'react'
import model from './ModelsArray'

const Models = () => {
    return (
        <div className="models-card">
              {model.map((props) => {
                return (
                    <div className="card">
                          <div className="inner-img2" >{props.img}</div>
                        <h3>{props.occupation}</h3>
                        <h3>{props.name}</h3>
                        <h4>{props.price}</h4>
                        <div className="card-city">
                            <h4>{props}</h4>
                        </div>
                    </div>
                )


            })}
        </div>
    )
}

export default Models