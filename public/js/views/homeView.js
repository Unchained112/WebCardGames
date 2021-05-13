function HomeView(){
    return (
        <div>
            <header class="w3-container w3-padding-16 homepageheader" id="myHeader">
                <div class="homepagetextbox w3-center">
                    <h1 class="homepagetitle w3-animate-top">Web Card Games</h1>
                    <h4>Online Poker Game Collection</h4>
                    <div class="w3-padding-32">
                        <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style="font-weight:600;">About us</button>
                    </div>
                </div>
            </header>

            <div id="id01" class="w3-modal">
                <div class="w3-modal-content w3-card-4 w3-animate-top">
                    <header class="w3-container w3-text-white w3-casino-green">
                        <span onclick="document.getElementById('id01').style.display='none'"
                              class="w3-button w3-display-topright">×</span>
                        <h4>KTH DH2642 Project Group 24</h4>
                    </header>
                    <div class="w3-padding w3-text-black">
                        We are a team from KTH Royal Institute of Technology, Interaction Programming and the Dynamic Web course. In this project, we are going to design a website where you can enjoy free poker card games online.
                        <ul>
                            <li>Bosen Cheng <a href="bosen@kth.se">bosen@kth.se</a></li>
                            <li>Yating Liu <a href="yatingli@kth.se">yatingli@kth.se</a></li>
                            <li>Yifei Wang</li>
                            <li>Ziyu Tang</li>
                        </ul>
                    </div>
                    <footer class="w3-container w3-text-white w3-casino-green">
                        <p>Reference: </p>
                        <ol>
                            <li>Breakout: <a href="https://everything2.com/title/Breakout">https://everything2.com/title/Breakout</a> </li>
                            <li>Leonhard, Woody (2009). <a href="https://books.google.se/books?id=BjhFgc4DdjIC&pg=PA293&redir_esc=y#v=onepage&q&f=false">Windows 7 All-in-One for Dummies.</a> John Wiley & Sons. p. 293. ISBN 9780470487631.</li>
                            <li>24 game. 4 numbers. <a href="https://www.4nums.com/24_game/">{"https://www.4nums.com/24_game/"}</a> </li>
                            <li>Tick And Cross Signs Green Checkmark Ok And Red X Icons Isolated On White Background Simple Marks Graphic Design Symbols Yes And No Button For Vote Decision Web Vector Illustration<a href='https://pngtree.com/so/yes-clipart'>yes clipart png from pngtree.com</a> </li>
                        </ol>
                    </footer>
                </div>
            </div>

            <div id="homepage" class="w3-container w3-row" style="padding:64px">
                <div class="w3-quarter w3-container" style="min-width: 250px; max-width: 300px">
                    <img src="./assets/2006_WSOP_Main_Event_Table.jpg" style="width:100%"></img>
                    <br></br>
                    <p class="w3-center">2006 World Series of Poker <br></br>
                        main event table</p>
                </div>

                <div class="w3-rest w3-container">
                    <h2>Poker Game Collection</h2>
                    <p>Our project aims to provide players with several small games related to poker cards online. Players can learn and play different games on our website. Besides, we also hope to offer some interesting stories about the game together with the game introduction. We utilized a set of APIs that allow us to draw decks of poker cards, shuffle, and draw cards Deck of Cards API. You are welcome to visit our project's <a href="https://github.com/Unchained112/WebCardGames">GitHub repository</a>. </p>

                    <h2>A Brief Introduction about Poker</h2>
                    <p>Poker is any of a number of card games in which players wager over which hand is best according to that specific game's rules in ways similar to these rankings. Often using a standard deck, poker games vary in deck configuration, the number of cards in play, the number dealt face up or face down, and the number shared by all players, but all have rules that involve one or more rounds of betting. <a href="https://en.wikipedia.org/wiki/Poker">[1]</a> </p>
                    <p>According to folklore, there are 52 cards in one deck of poker, representing 52 weeks in a year, and two decks. Hearts, Clubs, Diamonds, and Spades represent the spring, summer, autumn, and winter seasons. The red card represents the day, the black card represents the night. Each season has 13 weeks and poker each suit contains exactly 13  cards. 12 Royals represent the 12 months. </p>
                </div>
      

            </div>

        </div>);
}

function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "200px";
    x.style.fontSize = "30px";
    x.style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
