const Tech = () => {
  return (
    <section id="projects" className="projects-section bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-5">My Projects</h2>
    
    <div id="projectsCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#projectsCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#projectsCarousel" data-slide-to="1"></li>
        <li data-target="#projectsCarousel" data-slide-to="2"></li>
        <li data-target="#projectsCarousel" data-slide-to="3"></li>
        <li data-target="#projectsCarousel" data-slide-to="4"></li>
      </ol>
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card project-card">
            <div className="row no-gutters h-100">
              <div className="col-md-6 h-100">
                <a href="https://github.com/KaiaWalters/glyph-travel-app" className="d-block h-100">
                  <img className="img-fluid object-fit-cover" src="img/geoglyph-site.png" alt="GeoGlyph: Personal Project by Kaia Walters"/>
                </a>
              </div>
              <div className="col-md-6">
                <div className="card-body bg-black text-white h-100 d-flex flex-column justify-content-center">
                  <h4 className="card-title">Geo Glyph: Personal Project</h4>
                  <p className="card-text text-white-50">GeoGlyph is a full stack application that utilizes geolocation tracking to empower people to document the histories of their communities. Inspired by the recent rise in gentrification in Boston and the need to preserve the voices and cultures that exist there.</p>
                  <a href="https://github.com/KaiaWalters/glyph-travel-app" className="btn btn-outline-light mt-3">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="card project-card">
            <div className="row no-gutters h-100">
              <div className="col-md-6 order-md-2 h-100">
                <a href="https://628e9bf52ad4be43f189ede6--hopeful-kirch-c7943f.netlify.app/" className="d-block h-100">
                  <img className="img-fluid object-fit-cover" src="img/nikkia4boston-site.png" alt="Nikkia Jean Charles Campaign Website by Kaia Walters"/>
                </a>
              </div>
              <div className="col-md-6 order-md-1">
                <div className="card-body bg-black text-white h-100 d-flex flex-column justify-content-center">
                  <h4 className="card-title">Nikkia 4 Boston Campaign Website</h4>
                  <p className="card-text text-white-50">A campaign website built for the committee to elect Nikkia Jean-Charles.</p>
                  <a href="https://628e9bf52ad4be43f189ede6--hopeful-kirch-c7943f.netlify.app/" className="btn btn-outline-light mt-3">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="card project-card">
            <div className="row no-gutters h-100">
              <div className="col-md-6 h-100">
                <a href="https://naughty-cori-c997dc.netlify.com/" className="d-block h-100">
                  <img className="img-fluid object-fit-cover" src="/img/bg-signup.jpg" alt="The Foodist Project"/>
                </a>
              </div>
              <div className="col-md-6">
                <div className="card-body bg-black text-white h-100 d-flex flex-column justify-content-center">
                  <h4 className="card-title">The Foodist</h4>
                  <p className="card-text text-white-50">Examples of some of my previous projects. The web page shown was created with inspiration from The Foodist website. Using HTML and CSS, I was able to recreate it.</p>
                  <a href="https://naughty-cori-c997dc.netlify.com/" className="btn btn-outline-light mt-3">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="card project-card">
            <div className="row no-gutters h-100">
              <div className="col-md-6 order-md-2 h-100">
                <a href="https://facebookhomepageproject.netlify.com/" className="d-block h-100">
                  <img className="img-fluid object-fit-cover" src="/img/Screen Shot 2019-06-25 at 1.22.54 PM.png" alt="Facebook login recreated by Kaia Walters"/>
                </a>
              </div>
              <div className="col-md-6 order-md-1">
                <div className="card-body bg-black text-white h-100 d-flex flex-column justify-content-center">
                  <h4 className="card-title">Facebook Homepage</h4>
                  <p className="card-text text-white-50">A pixel perfect recreation of Facebook's homepage. Feel free to make the comparison.</p>
                  <a href="https://facebookhomepageproject.netlify.com/" className="btn btn-outline-light mt-3">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="card project-card">
            <div className="row no-gutters">
              <div className="col-md-6">
                <a href="https://bostonhomepageproject.netlify.com">
                  <img className="img-fluid w-100 h-100 object-fit-cover" src="/img/demo-image-02.jpg" alt="Boston webpage"/>
                </a>
              </div>
              <div className="col-md-6">
                <div className="card-body bg-black text-white h-100 d-flex flex-column justify-content-center">
                  <h4 className="card-title">Boston Webpage</h4>
                  <p className="card-text text-white-50">A recreation of Boston.com's webpage. Nice right? I think that the pop of aquamarine really made the page.</p>
                  <a href="https://bostonhomepageproject.netlify.com" className="btn btn-outline-light mt-3">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a className="carousel-control-prev" href="#projectsCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#projectsCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
    </section>
  )
}

export default Tech