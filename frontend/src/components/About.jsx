import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The oly thing we're serious about is food</p>
            </div>
            <p className="mid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, impedit alias, neque saepe rem ducimus commodi numquam suscipit praesentium sapiente eos molestiae placeat minus nam voluptatibus perferendis ratione, obcaecati dolorem voluptate. Facilis sed quos eius deserunt culpa dicta odio facere atque modi, labore provident nihil ad architecto adipisci a accusamus.</p>
            <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About
