# Welcome to MovieSiteApp!

## About Project

Our project is for a movie site where a user can store their movie lists. We allow the user to add or remove these movies aswell. Every movie has information about it such as their IMDB rating, director, movies language and their poster image. The user can see these movies with cards that where designed to be eaisly seen and comfortable to browse.

## Usage Scenarios

 - The user enters the website and sees the main page on screen.
![alt text](https://cdn.discordapp.com/attachments/643911737837617192/981937381672362035/unknown.png)

 - The page has movie cards which has movie features such as **title, etc**. Also, we can delete a movie from the list by **clicking delete button**.

![alt text](https://cdn.discordapp.com/attachments/643911737837617192/981938044074610708/unknown.png)
 
 - You can add a new movie by **clicking add movie button** on the navbar.
![alt text](https://cdn.discordapp.com/attachments/643911737837617192/981938928833663076/unknown.png)
## Project Members
 - Kerem Ersan
 - Musa Berkay Kocabaşoğlu
 - Kaan Alp

## Responsibilities of Each Member

 - Kerem **created the repository** and made initial updates on the page such as **designing the navbar**. He added the **delete function** of the movies from the lists. He added **design to the form** made the **form responsive** and also added the **form validations** for each input field on the add movie form.
 - Musa added navbar, moviecards and teamcards to **responsive** view. He added moviecard and teamcard with **kitchen sink card** component. He added **data management** features with Fake Server implementation. He used and added **axios** functionalities for getting, posting.
 - Kaan did the basic template of the team and did the work for about pages.

## How to Run the App

 1.  After you cloned the repository, you navigate to the project folder in the command prompt.
 2. You need to run `npm install` in order to add the dependencies of project.
 3. After installation is completed, you need to run FakeServer in project folder by **run.bat** file.
 4.  After server is online, you can run the project with `npm start`.
 5. You can visit the project by navigating http://localhost:3000/  in browser.
 6. Now, you have access the main page.

## External Libraries

 - **axios** is used to communicate with the Fake Server.
 - **reactstrap** is used for designing and making responsive add movie form. Additionally, reactstrap "Alert" element  is used to notificate user if movie is added or not.
 - **react-bootstrap** is used for designing movie and team cards. Grid elements of react-bootstrap is used for making navbar responsive.
 - **react-router-dom** is used for navigating between the pages via "Link" element.
