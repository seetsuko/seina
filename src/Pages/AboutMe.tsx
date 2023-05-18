
import mgram from "../picture/mgram.jpg";
import "../css/AboutMe.css";
import AnimationTrigger from "../components/AnimationTrigger";

export const AboutMe = () => {
  return(
    <section id="about-me">
      <div className="about-me">
      <AnimationTrigger animation="fadeIn" rootMargin="100px" triggerOnce>
      <div>
        <h2>About Me</h2>
        <p>\ こんにちは！長門 聖菜です /</p>
      </div>
      </AnimationTrigger>
        <div className="personal-card-container">
          <div className="personal-card">
            <p>興味と好奇心の塊です
興味関心を持ったものは、やらない以外にない！そしてやるときめたら最後までとことん知りたい！経験したい！という性格です。 ページトップにも書いた通り、不可能なことはないと考えています。人間は努力次第で自分の想像を超えられるし、その先にまた新しい可能性が待っていると思っています。</p>
          </div>
          <div className="personal-card">
            <p>関心を持ったものは、やらない以外にない！そしてやるときめたら最後までとことん知りたい！経験したい！という性格です。 ページトップにも書いた通り、不可能なことはないと考えています。人間は努力次第で自分の想像を超えられるし、その先にまた新しい可能関心を持ったものは、やらない以外にない！そしてやるときめたら最後までとことん知りたい！経験したい！という性格です。 ページトップにも書いた通り、不可能なことはないと考えています。人間は努力次第で自分の想像を超えられるし、その先にまた新しい可能</p>
          </div>
          <div className="personal-card">
            <p>興味と好奇心の塊です
興味関心を持ったものは、やらない以外にない！そしてやるときめたら最後までとことん知りたい！経験したい！という性格です。 ページトップにも書いた通り、不可能なことはないと考えています。人間は努力次第で自分の想像を超えられるし、その先にまた新しい可能性が待っていると思っています。</p>
          </div>
        </div>
        <div className="mgram-image">
          <img src={mgram} alt="mgram診断画像" />
          <a href="https://mgram.me/ja/user/profiling/edit">mgram診断</a>
        </div>
      </div>
    </section>
  );
};