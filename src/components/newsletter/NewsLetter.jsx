import React from 'react'
import './nl.scss'
import { CiMail } from 'react-icons/ci'


const NewsLetter = () => {
    return (
        <div className='news-div'>
            <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p>Subscribe to pour newsletter to receive the latest news and updates about Modelkos</p>
            <div className="input-div">
                <span><CiMail /></span>
                <input type="email" placeholder='Type mail here' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter

