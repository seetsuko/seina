
import "../css/AboutMe.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import mgram from "../picture/mgram.jpg";

export const AboutMe = () => {
  return(
    <section id="about-me">
      <div className="about-me">
        <div className="title-container">
          <h2>About Me</h2>
          <p>こんにちは！長門 聖菜です</p>
        </div>
        <div className="personal-card-container">
          <Card sx={{ width: 400,
                      minHeight: 400,
                      marginRight: 5,
                      backgroundColor: "#f0ffff",
                      boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: "1.5rem",
                                padding: 2,
                                borderBottom: 1}}>
                好奇心と探求心が<br/>尽きない！
              </Typography>
              <Typography sx={{ fontSize: "1.2rem",
                                padding:3,
                                textAlign: "left"}}
                                color="#37434f"
              >
                常に「なんで？」と「もっと」が頭の中にあり、とにかく調べて知識を深めていくのが大好きです。興味を持ったことはとことん知りたい、経験したい！という性格です。やってみたいと思ったことは挑戦したい！失敗こそ大きな学びだと考えています。また、成長には素直さが大切という考えを持っており、柔軟に吸収していくようにしています。
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 400,
                      minHeight: 400,
                      backgroundColor: "#f0ffff",
                      boxShadow:10,}}
          >
            <CardContent>
              <Typography sx={{ fontSize: "1.5rem",
                                padding: 2,
                                borderBottom: 1}}
              >
                コミュニケーション<br/>大好き！
              </Typography>
              <Typography sx={{ fontSize: "1.2rem",
                                padding:3,
                                textAlign: "left"}}  color="#37434f"
              >
                前職で接客業、営業事務等で人と関わることが多かったこともあり、人とコミュニケーションを取ることが大好きです。人と話すことで知識や経験、情報の交換ができて新しい発想が生まれることもあるし、1人よりもみんなで協力することで、達成感や喜びも倍増すると考えているので、ぜひ皆さんと一緒に頑張りたいです！
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="mgram-image">
          <img src={mgram} alt="mgram診断画像" />
          <a href="https://mgram.me/ja/user/profiling/edit">mgram診断</a>
        </div>
      </div>
    </section>
  );
};