import React from 'react'
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProductsMegamenu from './components/ProductsMegamenu';
import './Nav.scss'
import { BsTriangleFill } from 'react-icons/bs';
import { BiLogoMediumSquare } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {

    const [menuOpen, setMenuOpen]= useState(false);
    const [menuOpen2, setMenuOpen2]= useState(false);
    return (
        <div className="nav">

            <Link className='title' to='/'>
            <BiLogoMediumSquare /> MODELKOS
            </Link>
            <div className='menu' onClick={()=>{
                setMenuOpen(!menuOpen);
                setMenuOpen2(!menuOpen2)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>


           
            <div id='links' className={menuOpen ? "open" : ""} >
            <div className="nav-link">
                    <Link to='/' className='inner-link'>Home</Link>
                </div>
                <div className="nav-link">
                    <Link   to='/' className='inner-link'>Products <MdKeyboardArrowDown /></Link>
                    <BsTriangleFill className='arrow'/>
                    <ProductsMegamenu />
                </div>

                <div className="nav-link">
                    <Link   to='/' className='inner-link'>About <MdKeyboardArrowDown /></Link>
                    <BsTriangleFill className='arrow'/>
                    <ProductsMegamenu />
                </div>

                <div className="nav-link">
                    <Link   to='/' className='inner-link'>Models <MdKeyboardArrowDown /></Link>
                    <BsTriangleFill className='arrow'/>
                    <ProductsMegamenu />
                </div>
                <div className="nav-link">
                    <Link   to='/' className='inner-link'>Academy <MdKeyboardArrowDown /></Link>
                    <BsTriangleFill className='arrow'/>
                    <ProductsMegamenu />
                </div>

                <div className="nav-link">
                    <Link to='/' className='inner-link'>Blog</Link>

                </div>
            </div>
          

            <div id="auth" className={menuOpen2 ? "open" : ""}>
                <Link to='/'>Apply now</Link>
                <Link to='/'  className='sign-up'>Contacts</Link>
            </div>

        </div>
    )
}

export default Nav