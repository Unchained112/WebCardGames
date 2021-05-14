# WebCardGames
Web poker games collection

## Project Introduction
Our project aims to provides players with several small games related to poker cards online. Players can learn and play different games on our website. Besides, we also hope to offer some interesting story about the game together with the game introduction.
We utilized a set of APIs that allow us to draw decks of poker cards, shuffle, and draw cards [Deck of Cards API](https://stackoverflow.com/questions/6957443/how-to-display-div-after-click-the-button-in-javascript). In this project, we use Vue as the base of our MVP model.

---

## Workload Distribution 

**PS: Due to network issue, Yifei and Ziyu haven't upload their work to this GitHub Repo, hopefully they will do it soon.**

### Bosen Cheng
**Current Stage**
1. Build up the homepage
2. Build the breakout game with poker cards (version 1)
    - Score system in the breakout model
    - Well-designed layout 
3. Build the FreeCell game

**Plan to do**
1. Persistence using firebase
2. Register Page


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
1. Implement basic functions of Blackjack in C++
2. Create a fundamental level Ai robot in the game

**Plan to do**
1. Build the Blackjack game in MVP
2. Try to implement multiple decks for AI

###  Ziyu Tang
**Current Stage**
1. 完成了大部分德州的用户界面,完成了一部分event,由于没有写ai的部分,网页依然不可互动


**Plan to do**
1. 完成规则介绍界面,完成结算界面
2. 完成剩下的event




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
- vuejs (folder):
    - xxxPresenter: display and pass data to the corresponding View components
- assets (folder): contains images like the background 
