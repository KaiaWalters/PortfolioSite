import clientPhoto from '../assets/img/client-stock-photo.jpg'
const Projects = () => {
    return (
          <section id="thrivntech" className="projects-section bg-light">
    <div className="container">
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
        <div className="col-xl-8 col-lg-7">
          <img className="img-fluid mb-3 mb-lg-0" src={clientPhoto} alt="Client stock photo"/>
          <a href="https://www.freepik.com/free-photos-vectors/city">City photo created by prostooleh -
            www.freepik.com</a>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Freelance Services</h4>
            <p className="text-black-50 mb-0"> Through Thrivn Tech LLC, I offer end to end digital marketing solutions for
              small businesses and personal promotion projects. Feel free to reach out to  <a href="mailto:thrivntech@gmail.com">thrivntech@gmail.com</a>.</p>
          </div>
        </div>
      </div> 
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="py-4 h-100">
            <div className="card-body text-center">
              <span className="text-primary mb-2">1</span>
              <h4 className="m-0">Consultation</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">
                <p>A great website is a reflection of an even greater vision. Let's talk about yours! I offer one on one consultation through out the development process. I offer my experitise and strategize with you to develop the best possible product. The goal is to stay aligned, focused, and on track to reaching your audience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="py-4 h-100">
            <div className="card-body text-center">
              <span className="text-primary mb-2">2</span>
              <h4 className="m-0">Development + SEO</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">
                <p>I utilize best practices to build lean and fast websites. Your goals will determine what tools I use and not the other way around. Search Engingine Optimization is included to drive traffick to your site and ensure that it is easily found through popular search engines.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="py-4 h-100">
            <div className="card-body text-center">
              <span className="text-primary mb-2">3</span>
              <h4 className="m-0">Maintenance</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">Maintenance is free one month after your site is deployed. I will check in with test users to ensure that the site is providing a good experience.</div>
            </div>
          </div>
        </div>
      </div> 
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <a href="https://calendly.com/thrivntech/30min" className="btn btn-primary js-scroll-trigger">Schedule Consultation</a>
        </div>
      </div>
    </div>
  </section>
    ) 
}

export default Projects