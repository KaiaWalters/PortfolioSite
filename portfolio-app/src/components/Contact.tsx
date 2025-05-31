const Contact = () => {
    return (
        <section className="contact-section bg-black">
    <div className="container">

      <div className="row">

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Location</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">Boston, Massachusetts</div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">
                <a href="mailto:@thrivntech@gmail.com?subject = Inquiry_from_KW.com&body = Inquiry">thrivntech@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Twitter</h4>
              <hr className="my-4"/>
              <div className="small text-black-50"><a href="https://twitter.com/KaiaThrivntech">@KaiaThrivnTech</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social d-flex justify-content-center">
        <a href="https://twitter.com/WaltersKaia" className="mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/kaiawalters/" className="mx-2">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/KaiaWalters" className="mx-2">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </div>
  </section>
    )
}

export default Contact 