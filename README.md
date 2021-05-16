# WebCardGames
Web poker games collection

## Project Introduction
Our project aims to provides players with several small games related to poker cards online. Players can learn and play different games on our website. Besides, we also hope to offer some interesting story about the game together with the game introduction.
We utilized a set of APIs that allow us to draw decks of poker cards, shuffle, and draw cards [Deck of Cards API](https://stackoverflow.com/questions/6957443/how-to-display-div-after-click-the-button-in-javascript). In this project, we use Vue as the base of our MVP model.

---
## Project Structure 
- index.html: display the content of the website from App
- js (folder):
    - apiConfig: store const values used for drawing data from the API
    - app.js: show the navigation bar and display different presenters
    - cardSource.js: fetch data from APIs
    - variable.js: store and pass the project variables to different files under one namespace. (To avoid the usage of global variable)
    - xxxModel.js: store different game models
    - views (folder):
        - xxxView.js: show the game components
    - firebase (folder):
        - firebaseConfig: basic firebase configuration file
        - userAuthen.js: allow user to sign up, sign in, and sign out with their emails and passwords
        - firebaseModel.js: store game data for user who has signed in
- vuejs (folder):
    - xxxPresenter: display and pass data to the corresponding View components
- assets (folder): contains images like the background 
---

**Notice:** 

1. To host the website locally, run "python -m http.server" in the "public" folder. Under local host condition, firebase is not usable due to the security rules of the realtime database.
3. For the persistence of our website, we only store the data for users who have signed in with their account. Currently, the website can only persist FreeCell game data. Of course, all content on this website is accessible without login.
4. Besides, for games like blackjack and 24Game, it is not necessary to store their in-game data since the round is very short, we will only store the data such as scores.
5. For breakout, it is a simple that used to test the realtime animation, thus the gaming logic is store in its view file and it is not related to poker card. After finish this game, we decided not to make realtime animation when using both API and MVP structure.   

---

## Workload Distribution 

### Bosen Cheng
**Current Stage**
1. Build up the homepage
2. Build the breakout game with poker cards
    - Well-designed layout 
    - Fun story about this game
3. Build the FreeCell game
    - Classic solitaire game
    - Players are able to withdraw their actions (achieved by an global variable LastGameState)
4. Sign up and sign in page
5. Sign up and sign in function, achieved using firebase authentication.
6. Persistence using firebase realtime database
    - Currently, persistence can only store freecell's game data.

### Yating Liu
**Current Stage**
1. Implement a calculator to calculate the user input formula.
2. Implement a view of 4 cards assigned to the user and a view of user input formula.

**Plan to do**
1. Implement a change of 4 cards when user finished a round
2. Implement a timer
3. Implement a restart function
4. Implement a solution function
5. Implement a score function

### Yifei Wang
**Current Stage**
1. Build the blackjack game with poker cards
    - Well-designed layout
    - Introduction to this game
2. Create a fundamental level Ai robot in the game


###  Ziyu Tang
**Current Stage**
1. Completed most of the user interface in Texas, and completed part of the event. Since there is no part of ai, the web page is still not interactive


**Plan to do**
1. Complete the rule introduction interface and complete the settlement interface
2. Complete the remaining event
