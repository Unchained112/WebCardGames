function HomeView(){
    return (
    <div class="w3-green">
    <header class="w3-container w3-padding" id="myHeader">
    <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button "></i> 
    <div class="w3-center">
    <h4>Online Poker Game Collection</h4>
    <h1 class="w3-xxxlarge w3-animate-bottom">Web Card Games</h1>
    <div class="w3-padding-32">
      <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style="font-weight:600;">About us</button>
    </div>
    </div>
    </header>
    <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-top">
      <header class="w3-container w3-text-white w3-highway-green"> 
        <span onclick="document.getElementById('id01').style.display='none'"
        class="w3-button w3-display-topright">×</span>
        <h4>KTH DH2642 Project Group 24</h4>
      </header>
      <div class="w3-padding w3-text-black">
        We are a team from KTH Royal Institute of Technology, Interaction Programming and the Dynamic Web course. In this project, we are going to design a website where you can enjoy free poker card games online. 
      <ul>
        <li>Bosen Cheng <a href="bosen@kth.se">bosen@kth.se</a></li>
        <li>Yating Liu</li>
        <li>Yifei Wang</li>
        <li>Ziyu Tang</li>
      </ul>
      </div>
      <footer class="w3-container w3-text-white w3-highway-green">
      <p>Reference: </p>
      <ol>
      <li>Breakout / Arkanoid: <a href="https://everything2.com/title/Breakout">https://everything2.com/title/Breakout</a> </li>
      <li>Leonhard, Woody (2009). <a href="https://books.google.se/books?id=BjhFgc4DdjIC&pg=PA293&redir_esc=y#v=onepage&q&f=false">Windows 7 All-in-One for Dummies.</a> John Wiley & Sons. p. 293. ISBN 9780470487631.</li>
      <li>XXX <a href="">XXX</a> </li>
      </ol>
      </footer>
    </div>
    </div>
    </div>);
}

function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}