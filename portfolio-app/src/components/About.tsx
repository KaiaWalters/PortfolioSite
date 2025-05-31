import kaia from '../assets/img/kaia.png'

const About = () => {
    return (
        <section id="about" className="about-section text-center">
            <div className="col-lg-8 mx-auto">
                <h2 className="mb-4">About Me</h2>
                <div className='inner-container'>
                    <img className="kaia" src={kaia}></img>
                    <p> Hello there. Welcome to my site. I am a full-stack software engineer, freelace software developer, and educator based in Boston. My expetise is in creating digital experiences that are accessible, inclusive, and enjoyable.
                        I have experience in both web and mobile development. Currently, I am working to invest my skills in to aiding black and brown businesses in increasing their online pressence.
                        Our world in becomig increasingly digital and customers expect to access products and services instantly via the web. Small businesses must keep pace with these changes in order to thrive. We can not afford to fall behind. Let's work together to bring 
                        your business into the future.
                    </p>
                </div>
                <a href="https://linktr.ee/thrivntech" className="btn btn-primary d-md-none mt-3">Learn More</a>
            </div>
        </section>
    )
}

export default About 