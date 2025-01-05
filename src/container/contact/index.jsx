import React from 'react'
import "./style.scss"
import Resume from "../../assests/Dinesh Resume.pdf"

const Contact = () => {

    return (
        <section id='contact-me'>
            <div className='button-container'>
                <button ><a href={Resume} download="Dinesh Resume.pdf">Download CV</a></button>
            </div>
        </section>
    )
}

export default Contact
