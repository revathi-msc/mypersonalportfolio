import React from 'react'
import './Project.css'

import P1 from '../images/P1.JPG'
import P2 from '../images/P2.JPG'
import P3 from '../images/P3.JPG'
import P4 from '../images/P4.JPG'
import P5 from '../images/P5.JPG'
import P6 from '../images/P6.JPG'

const data = [
    {
        id: 1,
        image: P1,
        title: 'SIGNUP APPLICATION',
        github: 'https://github.com/revathimsc/signup-frontend.git/',
        demo:'https://signup-app1.netlify.app/'
    },
    {
        id: 2,
        image: P2,
        title: 'O-AUTH FIREBASE PHONE OTP',
        github: 'https://github.com/revathimsc/auth-login.git/',
        demo:'https://phone-auth-70be1.firebaseapp.com/'
    },
    {
        id: 3,
        image: P3,
        title: 'CRUD BOOKSTORE APP',
        github: 'https://github.com/revathimsc/bookstore.git/',
        demo:'https://crud-bookstore-app.netlify.app/'
    },
    {
        id: 4,
        image: P4,
        title: 'CRUD APPLICATION',
        github: 'https://github.com/revathimsc/crud-application.git/',
        demo:'https://curd-application1.netlify.app/'
    },
    {
        id: 5,
        image: P5,
        title: 'TASK MANAGEMENT TOOLS ',
        github: 'https://github.com/revathimsc/task-management-rec.git/',
        demo:'https://task-management-rec.vercel.app/auth'
    },
    {
        id: 6,
        image: P6,
        title: 'Flipkart App using PAYMENT GATEWAY',
        github: 'https://github.com/revathimsc/flipkart-frontend.git/',
        demo:'https://iridescent-granita-68829f.netlify.app/'
    },
]


const Project = () => {
    return(
        <section id ='Project'>
            <h1>PROJECT</h1>

            <div className='container Project_container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className='Project_item'>
                                <div className='Project_item-image'>
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="Project_item-cta">
                                     <a href={github} className='btn' target='_blank'>GITHUB</a>
                                     <a href={demo} className='btn btn-primary' target='_blank'>LIVE DEMO</a>
                                </div>
                                
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project