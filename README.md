# juan-sierra-web-code-challenge

## To Deploy:

npm install and bower install:

client dependencies angular, jquery, ionic
server morgan, nodemon, express, bodyparser

run  nodemon index.js in the command line running node

go to localhost:8000/ and the app should run in page load.

Alternatively, you may load the views directly from redditWebApp/www/index.html

## Build & development

Angular and bower components:

The app is around 2/3's done: the angular search terms populate new searches from reddit using JSON; 

The search bar is responsive;

And the sprites are in place to change the inline items:

TODO:

drag and drop functionality to have the user click to that reddit page. This can be added easily from the json but not yet available as i was working on the drag and drop

Update of search items as typing. Again, easily done with Angular just ran out of time.

Answers to questions in instructions README:


• Was 3 days/12 hours enough time? Why or why not.

It would have been if I could have worked on the project enough during that time. As it is, I had a full-stack coding challenge to do during the weekend--no excuse to not finish the task, but I believe I got enough done to show that I understand the problem. I worked on it for around 5 hours Monday.

I understand part of it had to be scoping issue; the project would have been simpler with jQuery/JSON, but I wanted to show my mastery of a AngularJS, and AngularJS would have made the extra-credit portion of the project simpler.

• How many hours would you estimate you spent total on the project?
5-6 hours

• Did you encounter any struggles while completing this? How did you overcome them?

Yes, the drag and drop directives are a little tricky. Research was the main way I overcame them. Mainly have to customize Angular directives; once an item is droppable the event will listen to open up a new web page or trigger an e-mail

• Do you have experience using SASS? If not did you look at it at all? Do you think
that it’s something you could learn easily?

I was not able to look it at it in depth, but I did incorporate my custom style sheet following some of the frameworks. I don't think it will be too difficult to incorporate and can be easily be adapted with another CSS framework like Materialize and Bootstrap.

• If you used a JavaScript library/framework, why did you choose it for this project?

AngularJS: I kept in mind the data binding aspect of the second part of the project. I also find the calls a little bit easier to build and more scalable.

Express/Node: I ran the app in a basic server just to test connectivity

Ionic: ionic makes the app more responsive for phone projects. Also, sets up the angular routes and controllers very easily.

• On a scale of 1 – 10, rate the complexity of this project (1 being super easy and 10
being the hardest thing you have ever done).

This is a 7; the project has a lot of attention to the styling which I usually do not do outside of bootstrap/materialize. 

The logic of the JS is fairly simple since it is only a call to the reddit API and altering of the URL search terms.

The trickier part is the custom directives; I think with one more day I would have gotten them.