
import "../css/AboutMe.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import mgram from "../picture/mgram.jpg";

export const AboutMe = () => {
  return(
    <section id="about-me">
      <div className="about-me">
        <div>
          <h2>About Me</h2>
          <p>\ こんにちは！長門 聖菜です /</p>
        </div>
        <div className="personal-card-container">
          <Card sx={{ width: 800,
                      minHeight: 800,
                      marginRight: 5,
                      backgroundColor: "#f1e5d0",
                      boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                テキストテキストテキスト
              </Typography>
              <Typography variant="h5" component="div">
                れれれれれれれれれれれれれれれれれれれれれれれれれれれれれれれれｒかｊごいあじおｇまふぃｒｊふぃおじぇいおふぁｍｋぁげｍｒｇ
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 800,
                      minHeight: 800,
                      marginLeft: 5,
                      backgroundColor: "#f1e5d0",
                      boxShadow:10, }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                テキストテキストテキスト
              </Typography>
              <Typography variant="h5" component="div">
                れれれれれれれれれれれれれれれれれれれれれれれれれれれれれれれれｒかｊごいあじおｇまふぃｒｊふぃおじぇいおふぁｍｋぁげｍｒｇ
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