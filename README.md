# David Hubber - The Monkees

### Milestone Project #1

User-Centric Frontend Development Milestone Project - Code Institute.

### Table of Contents

* [Demo](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Demo)
* [Summary](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Summary)
* [User Stories](https://github.com/DavidHubber/milestone-1/blob/master/README.md#User)
* [UX](https://github.com/DavidHubber/milestone-1/blob/master/README.md#UX)
* [Testing](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Testing)
* [Features](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Features)
* [Technologies](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Technologies)
* [Deployment](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Deployment)
* [Acknowledgements/ Sources](https://github.com/DavidHubber/milestone-1/blob/master/README.md#Acknowledgements)

----------

## Demo

A live demo can be found [HERE](https://davidhubber.github.io/milestone-1/index.html)

Here is how the site will look on different devices [![mockup.png](https://i.postimg.cc/fRbW6FPY/mockup.png)](https://postimg.cc/qz9dKm47)

----------

## Summary



This Milestone project creation is the culmination of learning and study from the first three modules of the Full Stack Developer Course, HTML, CSS & User Centric Frontend Development, to build a mobile-first fully responsive website for, in this instance, a music band.

The premise of the site is to allow music fans & potential music fans of The Monkees to, potentially, learn a little about the band's history and it's members.

----------

## User Stories
* As a user, I want the ability to read about the band and band members.
* As a user, I want the ability to hear audio/ music clips from the band's most popular music.
* As a user, I want the ability to watch the band in action to guage their showmanship.
* As a user, I want the ability to contact the band to talk about hiring for events.
* As a user, I want the ability to view the bands profiles on mine or a selection of social media platforms.

----------

## UX

The site was kept simple and colourful with simple collapsible, responsive navigation.

The idea was not to attempt to 'fill a gap' of unknown knowledge about 'The Monkees', but rather, 'paraphrase’, (massively), their story.

With just a few images and short descriptions of the members of the band, the hope was to allow users/ viewers of the site simple and quick navigation.

The audio on the site is limited, and each song, when played, shows the album from which it came, with a link to a 'Wikipedia' page about the song itself.

A video was added more for curiosity rather than necessity, and a picture gallery of The Monkees discography was place at the end of the site.

A contact form was added before the footer with dates and locations of there next gigs.

The site is a scrolling site rather than a site full of pages, merely to allow the user to stay on one page without losing track.


**Below are the mockups/ wireframes**

[![wireframe.png](https://i.postimg.cc/zfnnRsX9/wireframe.png)](https://postimg.cc/Nyjy3PX4)

----------

## Testing

##### User Testing

All pages functions and information was reviewed by a small team. 

All anchor points & links/ nav links are functional, have been tested and are live. They also, if required, open in a different tab, (```
target="_blank"```
), to ensure undue disruption to the flow of the page. 


The issue causing the most problems was the main cartoon image of the the band. Trying to get the image to shrink and center across various devices was taxing. It was resolved by using a 'transform' function with 'translate:

```
position: absolute; top: 50%; left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
```

Contact section added, although, no functionality at this time.


##### Browser Testing via:

* [Google Chrome](https://www.google.com/chrome/)
* [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/)
* [Safari](https://www.apple.com/safari/)
* [Vivaldi](https://vivaldi.com/)

##### Device Testing via:

* [iPad Pro 11-inch](https://www.apple.com/ipad-pro/specs/)
* [iPhone Xr](https://www.apple.com/iphone-xr/specs/)
* [iMac Pro](https://www.apple.com/imac-pro/specs/)
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)

----------

## Features

* [Navigation](https://davidhubber.github.io/milestone-1/index.html#pageTop)
Simple collapsable and fixed navbar.
* [Intro section](https://davidhubber.github.io/milestone-1/index.html#pageTop)
Colourful 60's style background with an image depicting The Monkees.
* [About section](https://davidhubber.github.io/milestone-1/index.html#band) 
Four rotating cards each with an image of a band member on the fronside and a limited bio on the flipside. 
* [music/ video section](https://davidhubber.github.io/milestone-1/index.html#audio)
 Both players are also very simple; 'click & play', with standard player buttons.
* [Gallery/ Album Art section](https://davidhubber.github.io/milestone-1/index.html#albumArt)
Clickable images into a gallery with simple back/ forward buttons, an image counter, the ability to view all images in a side panel and play button to enable a 'slideshow' effect.
* [Contact form](https://davidhubber.github.io/milestone-1/index.html#contact) Simple contact form (No functionality).
* [Footer section](https://davidhubber.github.io/milestone-1/index.html#footer) Containing brief, factual information about the band, and social media icons.

----------

## Technologies

* [HTML](https://www.w3schools.com/whatis/whatis_html.asp) (Hyper Text Markup Language): The standard markup language for creating web pages and web applications.
* [CSS](https://www.w3schools.com/whatis/whatis_css.asp) (Cascading Style Sheets): A style sheet language used for describing the presentation of a document written in a markup language like HTML. 
* [Bootstrap](href="https://getbootstrap.com/): A CSS Framework for developing responsive and mobile-first websites.
* [GitHub](href="https://github.com/): A web-based hosting service for version control using Git.
* [Google Chrome Developer Tools](https://www.google.com/chrome/dev/): Used to view & test cutting-edge web platform APIs with the use of developer tools.
* [Dreamweaver](https://www.adobe.com/products/dreamweaver.html) (Adobe): A web design and development application that uses both a visual design surface known as Live View and a code editor.
* [Photoshop](https://www.adobe.com/products/photoshop.html) (Adobe): A raster graphics editor developed and published by Adobe Systems for macOS and Windows
* [Macdown](https://macdown.uranusjr.com/): An Open source Markdown editor for macOS.
* [Balsamiq](https://balsamiq.com/): A rapid low-fidelity UI wireframing tool that reproduces the experience of sketching on a notepad or whiteboard, but using a computer.
* [NXPowerLight Desktop](https://www.neuxpower.com/nxpowerlite-desktop/): A file compression tool use for compressing such files as JPGs & PDFs.
* [FontAwesome](https://fontawesome.com/): A font and icon toolkit based on CSS and LESS.
* [Google Fonts](https://fonts.google.com/): A library of over 800 libre licensed fonts.

----------

## Deployment

* Created a repository in GitHub - [https://github.com/DavidHubber/milestone-1](https://github.com/DavidHubber/milestone-1)
* Commited a [README.md](https://github.com/DavidHubber/milestone-1/blob/master/README.md) Markdown file and uploaded initial commit.
* Activated GitHub Pages via the repository’s settings.

----------

## Acknowledgements

**Fonts**

* Karin Pro - [iFonts](https://ifonts.xyz/karin-pro-font.html)
* GoodGirl by - [Cathy Davies](https://www.fontspace.com/cathy-davies)
* Mouse Memoirs - [Brian J. Bonislawsky](https://www.1001fonts.com/search.html?search=MOUSE+MEMOIRS&x=0&y=0)

**Images**

* **General**

	* Background image (sun) by
[macrovector](http://www.freepik.com")
	* Header image (band members) via [UI Here](https://www.uihere.com/free-cliparts/the-monkees-music-the-headquarters-sessions-clip-art-pop-6420452)
	* Guitar logo via [The Monkees](https://www.monkees.com/)
	* Responsive mockup [Tech&All](https://techandall.com/shadow-series-apple-idevices/)

* **Album Art**

	* More of The Monkees - U.S. Fair Use laws
	* The Birds, The Bees & The Monkees - [Colgems](https://en.wikipedia.org/wiki/Colgems_Records)
	* The Monkees - [AllMusic.com](https://www.allmusic.com/album/r13312)
	* Pisces, Aquarius, Capricorn & Jones Ltd - [Colgems](https://en.wikipedia.org/wiki/Colgems_Records)
	* Headquarters - [Colgems](https://en.wikipedia.org/wiki/Colgems_Records)

* **Gallery Album Art**

	* All images - [Sunshine Factory](https://monkees.coolcherrycream.com/)


**Scripts**

* Audio (Amplitude) - [521 Dimensions](https://521dimensions.com)
* Image Gallery (FancyBox) - [FancyApps](https://github.com/fancyapps)



**Video**

* I'm a Believer - [Daily Motion](https://www.dailymotion.com/video/xppgv4)