import "../css/Skill.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Skill = () => {
  return(
    <section id="skill">
      <div className="skill">
        <div className="skill-title-container">
          <h2>Skill</h2>
          <p>主にReactを勉強して、ちょっとずつNode.jsを学び、アプリ開発でDBを使いたかったので、学習難易度が低めでモダンな技術と言われているRuby on railsを勉強しています。インフラにおいてはデプロイしかしておらず、まだまだ知識がないのでこれから頑張りたいと思っています。
          </p>
        </div>
        <div className="skill-container">
        <Card sx={{ width: 600,
                      height: 500,
                      marginRight: 10,
                      backgroundColor: "#b8cffa",
                      boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: 45,
                                borderBottom: 1}}>
                FRONTEND
              </Typography>
              <Typography sx={{ fontSize: 34,
                                padding:7,
                                textAlign: "left"}}
                                color="text.secondary"
              >
                ■ HTML,CSS<br/>
                ■ JavaScript<br/>
                ■ React<br/>
                ■ Vue&emsp;&emsp;― 学習中<br/>
                ■ Sass(Scss)<br/>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 600,
                      height: 500,
                      marginRight: 10,
                      backgroundColor: "#b8cffa",
                      boxShadow:10,}}
          >
            <CardContent>
              <Typography sx={{ fontSize: 45,
                                borderBottom: 1}}
              >
                BACKEND
              </Typography>
              <Typography sx={{ fontSize: 34,
                                padding:7,
                                textAlign: "left"}}  color="text.secondary"
              >
                ■ Ruby&emsp;&emsp;― 学習中<br/>
                ■ Ruby on Rails<br/>&emsp;&emsp;&emsp;&emsp;&emsp;― 学習中<br/>
                ■ Node.js<br/>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 600,
                      height: 500,
                      backgroundColor: "#b8cffa",
                      boxShadow:10,}}
          >
            <CardContent>
              <Typography sx={{ fontSize: 45,
                                borderBottom: 1}}
              >
                INFRA
              </Typography>
              <Typography sx={{ fontSize: 34,
                                padding:7,
                                textAlign: "left"}}  color="text.secondary"
              >
                ■ GitHub Pages<br/>
                ■ AWS
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};