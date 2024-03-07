export default function HobbyLinks() {
   let hobbyLinks = ["https://jhspedals.info", "https://www.morganamps.com"];
   let pageTitle = "Guitar Gear Links";
return (
  <div>
    <h3>{pageTitle}</h3>
    <a href={hobbyLinks[0]}>JHS Pedals</a>
    <br></br>
    <a href={hobbyLinks[1]}>Morgan Amplification</a>
  </div>
);
}