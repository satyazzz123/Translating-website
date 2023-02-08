import React from 'react'
import Contact from './Contact'
import Sidenav from './Sidenav'

export default function Home() {
  let component_over1=function(){
    let a =document.getElementById("intro");
    let dot ="wheat"
  }
  return (
    <div className='home'>
        <Sidenav/>
        <Contact/>
      <section id='intro' dot-color={component_over1} className="intro">

    <div className="overlay-intro">
    <div className="head">
            {/* later to be improvised */}
            <span style={{padding:"0 3rem"}}>  Login  </span>  
            <span style={{padding:"0 3rem"}}>  SignUp  </span>
        </div>
        <div className="intro-content">
           Language is not a barrier anymore


        </div>
    
    
    </div>
      
              


      </section>
      <section id='diff_voice' className="diff_voice">
        <div className="overlay-2">
          <div className="card1">
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate, molestias quo sequi, magnam reprehenderit veniam fuga excepturi consectetur quos error atque fugiat molestiae mollitia unde omnis porro, temporibus quis?</p>
          </div>
          <div className="card2"> <p data-aos="fade-up"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas minus quis tempora atque ratione rem nihil, sunt, explicabo, architecto incidunt harum mollitia nesciunt quibusdam esse ea repellat maxime praesentium veniam?</p></div>
        </div>
      </section>
      <section id='asia' className="asia">
      <div className="overlay-asia">
        <div className="asia-card1">
      <p data-aos="fade-up">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In facilis fugit voluptatem eius modi quidem voluptatum laudantium beatae. Cumque eligendi amet, expedita dolorum ipsum repudiandae est totam harum in ipsa?
      </p>


        </div>
   
      </div>

      </section>
      <section id='euro' className="euro">
        <div className="euro-card">
         <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum at similique culpa corrupti, quis fugit tempore doloremque debitis architecto commodi voluptatem explicabo! Tempora, velit dolores consequuntur repudiandae 
         </p>
        </div>
      </section>
      <section id='africa' className="africa">
        <div className="overlay-africa">
          <div className="card-africa">
            <p data-aos="fade-up">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum molestiae vitae nam officiis quo veritatis assumenda blanditiis, non tenetur vero repellendus velit odit optio, nihil reprehenderit dolor natus. Maxime?
            </p>
          </div>
        </div>
      </section>
      <section id='N_america' className="N_america">
        <div className="N-card">
         <p data-aos="fade-up">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam quae sint neque quidem minima corrupti, eligendi assumenda quisquam vero, culpa, ipsum vitae id. Rem incidunt minima itaque ad illum!
         </p>
        </div>
      </section>
      <section id='S_america' className="S_america">
        <div className="S_card">
          <p data-aos="fade-up">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptatem minima ea similique eum quis, nulla quisquam quae eaque qui, laudantium labore nesciunt ab voluptates alias, magni sapiente suscipit doloremque.
          </p>
        </div>
      </section>
      <section id='aus' className="aus">
        <div className="aus-card">
          <p data-aos="fade-up"> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint commodi provident placeat facilis. Ut, facere. Earum, officia fuga nemo iusto ea sit. Odit nostrum illo, dolore repudiandae esse tempore sit?
          </p>
      </div>
      </section>



    </div>
  )
}
