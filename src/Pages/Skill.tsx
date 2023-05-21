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
        <Card sx={{ width: 300,
                    height: 250,
                    marginRight: 5,
                    backgroundColor: "#b8cffa",
                    boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: "1.5rem",
                                borderBottom: 1}}>
                FRONTEND
              </Typography>
              <Typography sx={{ fontSize: "1rem",
                                padding:2,
                                textAlign: "left"}}
                                color="text.secondary">
                ■ HTML,CSS<br/>
                ■ JavaScript<br/>
                ■ React<br/>
                ■ Sass(Scss)<br/>
                ■ TypeScript
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 300,
                    height: 250,
                    marginRight: 5,
                    backgroundColor: "#b8cffa",
                    boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: "1.5rem",
                                borderBottom: 1}}
              >
                BACKEND
              </Typography>
              <Typography sx={{ fontSize: "1rem",
                                padding:2,
                                textAlign: "left"}}
                                color="text.secondary">
                ■ Ruby&emsp;&emsp;― 学習中<br/>
                ■ Ruby on Rails<br/>&emsp;&emsp;&emsp;&emsp;&emsp;― 学習中<br/>
                ■ Node.js<br/>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 300,
                    height: 250,
                    marginRight: 5,
                    backgroundColor: "#b8cffa",
                    boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: "1.5rem",
                                borderBottom: 1}}
              >
                INFRA
              </Typography>
              <Typography sx={{ fontSize: "1rem",
                                padding:2,
                                textAlign: "left"}}
                                color="text.secondary">
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