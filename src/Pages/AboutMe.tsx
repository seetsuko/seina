
import mgram from "../20731.jpg"
import "../css/AboutMe.css"

export const AboutMe = () => {
  return(
    <div className="about-me">
      <section id="about-me">
        <h2>About Me</h2>
        <img src={mgram} className="my-mgram" alt="mgram診断画像" />
        <a href="https://mgram.me/ja/user/profiling/edit">mgram</a>
      </section>
    </div>
  )
}