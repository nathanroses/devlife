import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className="i-intro"> Hello, My Name is </h2>
                  <h1 className="i-name">Nathan Rose</h1>
                 <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">React Native</div>
                      <div className="i-title-item">Java Script</div>
                      <div className="i-title-item">Python</div>
                      <div className="i-title-item">Designer</div>
                  </div>
                </div> 
                <div className="i-desc">
                    I design and develop websites and applications for customers
                    big and small. I work together with indie developers to create
                    new stylish and modern websites as well as online retail.
                </div>
              </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="me in a chair" className="i-img" />
            </div>
        </div>
    );
};

export default Intro
