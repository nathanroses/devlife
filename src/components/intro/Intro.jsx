import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className="i-intro"> Hello, My name is </h2>
                  <h1 className="i-name">Nathan Rose</h1>
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">React Native</div>
                      <div className="i-title-item">Java Script</div>
                      <div className="i-title-item">Python</div>
                      <div className="i-title-item">Designer</div>
                  </div>
              </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro
