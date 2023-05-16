import myPicture from "../20728.jpg"
import mgram from "../20731.jpg"
import "../css/AboutMe.css"

export const AboutMe = () => {
  return(
    <div>
      <img src={myPicture} className="my-picture" alt="プロフィール画像" />
      <img src={mgram} className="my-mgram" alt="mgram診断画像" />
      <a href="https://mgram.me/ja/user/profiling/edit">mgram</a>
    </div>
  )
}