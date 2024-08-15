import React from 'react'
import CurvedTxt from '../CurvedTxt'
import { footerData } from './FooterData'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { IoLogoMedium } from 'react-icons/io5'
import { FaFacebook, FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { BiLogoMedium, BiLogoMediumSquare } from 'react-icons/bi'


const Footer = (props) => {
    return (
        <div className='footer-container'>
            <div className="footer-heading">
                <h1>MODELING</h1>
                <CurvedTxt />
                <h1>MODELING</h1>
            </div>
            <div className="mainrow">
            <div className="footer-links">
                {footerData.map((props) =>{
                    return(
                        <div className="links-colon">
                            <h1>{props.category}</h1>
                            <div className='links-div'>
                            {props.links.map((l)=>{
                                return(
                                    <Link key={l.to} to={l.to}>{l.link}</Link>
                                )
                            })}
                            </div>
                        </div>
                        
                    )
                })}
                </div>
                <div className='footer-line'></div>
                <div className="footer-info">
                   <div className='models-info'>
                    <h1>Models</h1>
                    <a href="">Women - 0207 376 7764</a>
                    <a href="">Men - 0207 376 7464</a>
                    <a href="">bookamodel@modelkos.com</a>
                   </div>
                   <div className='models-info'>
                   <h1>Modelkos Management</h1>
                    <a href="">1st Floor</a>
                    <a href="">5 Jubilee Place</a>
                    <a href="">Prishtina , Kosovo</a>
                   </div>
                   <div className='models-info'>
                   <h1>Jobs</h1>
                    <a href="">jobs@modelkos.com</a>
                   </div>
                </div>
            </div>
            
           
            <div className='footer-line1'></div>
            <div className='real-footer'>
                <div className='logo-holder'>
                    <Link ><BiLogoMediumSquare /></Link>
                    <h1>MODELKOS</h1>
                </div>
                <div className='date-holder'>
                    <h3>Ⓒ 2022 MODELKOS </h3>
                </div>
                <div className='last-links'>
                    <a href="">Privacy Statement</a>
                    <a href="">Terms of Service</a>
                    <a href="">Help / FAQ</a>
                </div>
                <div className='social-logos'>
                    <Link><FaFacebookF/></Link>
                    <Link><FaInstagram /></Link>
                    <Link><FaTiktok /></Link>
                    <Link><FaTwitter /></Link>
                </div>
                <div className="line-number">
                    <h3>+383 (44) 100 200</h3>
                </div>
                <div className="translate-holder">

                </div>
            </div>
            
           

        </div>
    )
}

export default Footer