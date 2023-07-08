
import "../css/Portfolio.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import myKirokun from "../picture/myKirokun.jpg";


export const Portfolio = () => {

  return(
    <section id="portfolio">
      <div className="portfolio">
        <div>
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-container">
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="https://my-kirokun.vercel.app">
                <CardMedia
                  component="img"
                  height="140"
                  image={myKirokun}
                  alt="mykirokun"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    マイキロくん⏰
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    健康管理や育児、仕事などのタスク別に経過時間を記録し、日常をサポートするアプリです。
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="portfolio-detail">
          <table>
            <tr><th>使用言語：</th><th>Typescript, Ruby</th></tr>
            <tr><th>ライブラリ：</th><th>React (day.js, chakra-ui, react-router)→Next.jsへ移行</th></tr>
            <tr><th>フレームワーク：</th><th>Ruby on Rails</th></tr>
            <tr><th>データベース：</th><th>ProgureSQL</th></tr>
            <tr><th>認証：</th><th>Firebase Authentication</th></tr>
            <tr><th>インフラ：</th><th>Vercel, render</th></tr>
            </table>
          </div>
          <div>
          <IconButton target="_blank" href="https://github.com/seetsuko/myKirokun-app">
            <GitHubIcon style={{fontSize: "2em"}}/>
          </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};