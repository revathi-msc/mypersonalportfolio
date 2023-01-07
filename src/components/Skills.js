import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="container">
  <h1 data-aos="zoom-in">Skills</h1>
  <div className="row">
  <div data-aos="flip-right" className="skill-bars col-lg-6">
    <h3>Programming Languages</h3>
    <div className="bar">
      <div className="info">
        <span>JavaScript</span>
      </div>
      <div className="progress-line js">
        <span></span>
      </div>
    </div>
    
    
  <h3>Web Development</h3>
    <div className="bar">
      <div class="info">
        <span>HTML</span>
      </div>
      <div className="progress-line html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>CSS</span>
      </div>
      <div className="progress-line css">
        <span></span>
      </div>
    </div>
    
    <div className="bar">
      <div className="info">
        <span>BOOTSTRAP</span>
      </div>
      <div className="progress-line bootstrap">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>NODEJS</span>
      </div>
      <div className="progress-line nodejs">
        <span></span>
      </div>
    </div>
  </div>
  <div data-aos="zoom-in" className="skill-bars col-lg-6">
  <h3>Framework</h3>
  <div className="bar">
      <div className="info">
        <span>React Js</span>
      </div>
      <div className="progress-line reactjs">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Express JS</span>
      </div>
      <div className="progress-line expressjs">
        <span></span>
      </div>
    </div>
    
    </div>
  <div data-aos="zoom-in" className="skill-bars col-lg-6">
    <h3>Database</h3>
    <div className="bar">
      <div className="info">
        <span>MySQL</span>
      </div>
      <div className="progress-line mysql">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div class="info">
        <span>MongoDB</span>
      </div>
      <div className="progress-line mongodb">
        <span></span>
      </div>
    </div>
  </div>
  </div>

        </section>
    )
}

export default Skills