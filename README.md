# FINAL MODIFICATION PROPOSAL
## Meta Royale
### localStorage Implementation
#### Purpose
#### How it is to be used
1. **Create**
   
   The user will input their:
   - Player name
   - Favorite deck archetype
     
   When the form is submitted, the data is stored in localStorage as an object.
   
   After that, the website will display a confirmation message, and will highlight cards based on the chosen archetype in the Deck Archetypes page and Meta Cards page.
   
2. **Read**
   
   When a page loads, the website retrieves the saved data.

   It will then display a welcome message (in the homepage), and automatically highlight matching cards in the Meta Cards page.

3. **Update**

   The user can update their preferences by:
   - Re-entering a new name
   - Selecting a different archetype
   - Clicking the **Save Preferences** button again

   After updating preferences, the previous data in localStorage will be overwritten, and the highlights will be immediately updated across the pages.
   
5. **Delete**

   The user can click the **Reset Preferences** button to remove the stored data in localStorage

   The website will then remove all highlights and clear the saved message.
   
### Updated Wireframes

---

# Q3 Proposal Update
## Meta Royale
### Features
* works on both mobile phones and laptops
* has webpages dedicated to explaining the different deck archetypes to help players find their playstyle
* comes with a table guide that shows arena trophy ranges, cards to expect, and progression tips
* has a deck archetype filter where users can browse different Clash Royale cards
### Details
* We will use JS in order to create a filter for the different types of cards.
* We will find the different types of meta cards and information by using trusted websites like RoyaleAPI, Stats Royale and Deck Shop.
* We will help Clash Royale users to become better at the game by helping them adjust to a playstyle that suits them and helps increase their winrate.
### Definition of Done
* The project is done when all webpages and features are implemented, work on both phone and laptops, and error-free

---

# WDProjRubidiumOcampoViray Project Proposal
## Meta Royale
### Your Ultimate Guide to the Clash Royale Arena

---

## Logo
A *crown icon* (inspired by the Clash Royale logo):
![Logo](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/logo.png)

---

## Website Description
Sick and tired of losing matches in *Clash Royale*? Well, you came to the right place! In *Meta Royale*, we offer all the information about the current cards and decks in the meta. Whether you’re a beginner, average, or even a pro player, this site is guaranteed to give you more knowledge and master the different strategies in *Clash Royale*.

---

## Website Outline

| Page | Title | Description |
|------|--------|-------------|
| *Home* | Master the Game | Introduces the site with an introductory paragraph about the website. |
| *Deck Archetypes* | Build Your Winning Deck | Displays the different types of decks (deck archetypes), prodividing their playstyle, layout, and example decks. (Each deck archetype has its own webpage) |
| *Meta Cards* | Frequently Used Cards | Interactive page that allows users to filter cards by deck archetype. This will show the most frequently used cards in that archetype, and will show the cards' image and  name. |
| *Arena Progression* | A Guide to All Arenas |  Shows the basic information in each arena, the cards to expect, and tips for progression. (A video will also be embedded showcasing a guide to all the arenas). |
| *About Us* | Meet the Creators | Includes the names of the creators and links to social media (GitHub, etc.). |

---

## JavaScript Integration
JavaScript will be used on the **Meta Cards** page. It will be used to create filter buttons for deck archetypes. When the user clicks one of the buttons, only the most frequently used cards belonging to that archetype will be shown.

## Wireframes
### Home: ![Home](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Home.png)
### Deck Archetypes: ![Deck Archetypes](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Deck%20Archetypes.png)
#### Control: ![Control](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Control.png)
#### Bait: ![Bait](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Bait.png)
#### Bridgespam: ![Bridgespam](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Bridgespam.png)
#### Cycle:![Cycle](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Cycle.png)
#### Siege:![Siege](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Siege.png)
#### Beatdown:![Beatdown](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Beatdown.png)
### Meta Cards: ![Meta Cards](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Meta%20Cards.png)
### Arena Progression:![Arena Progression](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/Arena%20Progression.png)
### About Us: ![About Us](https://github.com/banonok11/WDProjRubidiumOcampoViray/blob/main/images/About%20Us.png)
