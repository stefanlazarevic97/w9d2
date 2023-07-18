# Pocket Projects: Vanilla JS Edition

**Live [Demo][demo]!**

Vanilla JavaScript is an incredibly important skill to have in both interviews
and as a developer. Vanilla JS is also super fun and gives you amazing
flexibility with what can be done on a webpage. So today you and your partner
will be getting comfortable with using vanilla JavaScript to manipulate the DOM
(Document Object Model) and make things work on the page. Each phase of this
project is a small 'pocket project' in that each phase can each stand on its
own, but together you'll have a website with a lot of functionality!

[demo]: https://appacademy.github.io/curriculum/pocket_projects/

## Learning goals

By the end of this project, you should be able to

- Traverse and manipulate the DOM using vanilla JavaScript
- Create event listeners using vanilla JavaScript
- Extend functionality using vanilla JavaScript
- Visualize an HTML page as a tree of DOM nodes
- Explain event bubbling and delegation
- Explain and implement debouncing

## Webpack

Clone the project starter. (You can access the starter repo by clicking the
`Download Project` button at the bottom of this page.)

You'll see two folders in the project directory, __/dist__ and __/src__. The
__/dist__ folder will hold all of your "distribution" code--including
__index.html__--all of your CSS files, and your __main.js__ bundle (once you run
Webpack). The __src__ folder is where you will find all the files that you will
be working with today. Before you start changing things, run `npm install` to
load Webpack into your project. Then run `npm run webpack` to get your Webpack
up and running. (The `webpack` script in __package.json__ has already been
written to run `webpack --watch --mode=development` for you.)

## Phase 0: HTML strings to DOM elements

Start by looking at the __dist/index.html__. You should see a `script` tag in
your header linking to your bundle with the attribute `defer`. The HTML
attribute `defer` means “wait for the parser to finish before executing this”.
It’s roughly equivalent to binding your script to the `DOMContentLoaded` event.
When your code does run, everything in the DOM will be available for you to use.

As you start each phase you'll be importing each of your JavaScript files into
__src/index.js__ and uncommenting the HTML in __dist/index.html__ for the phase
you are working on. All of the JavaScript files you import into __src/index.js__
will then also be read and bundled up by Webpack into __dist/main.js__.

In this project, you should use the [ES6 style of importing][es6-import], an
elegant and clear syntax that makes it very easy to import modules from files.
Just follow the pattern established in the provided skeleton.

Let's warm up with something simple. Head to __src/warmup.js__. Once there, you
should see a function named `htmlGenerator`. The `htmlGenerator` function will
take two arguments: a string and an [`HTML Element`][html-dom]. The function
should convert the input string [into a `<p>` tag][create-element] and then
[append] it to the input `HTML Element`. Never be afraid to look up the
documentation for how to interact with `HTML Element`s if you need a reminder.

Since the [DOM][dom] is a traversable tree you can add to, use your
`htmlGenerator` to add a fun phrase like "I <3 Vanilla DOM manipulation." to
your `h1` tag. Now, whenever you reload the page your `htmlGenerator` will
append a `p` tag below your `h1` tag. Neat! Let's move on to the next phase.

[dom]:
  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
[html-dom]: https://www.w3schools.com/jsref/dom_obj_all.asp
[create-element]:
  https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
[append]: https://www.w3schools.com/jsref/met_node_appendchild.asp
[es6-import]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

## Phase 1: Clock

Now it's time to flex your Vanilla DOM muscles. Start by building a clock! Take
a look at __index.html__ and un-comment the HTML for `Phase 1: Clock`. You
should see a `div` with the id of "clock". This is the element you'll be
building your clock upon. Before you start, remember to import your clock file
into __src/index.js__ or your code won't be included by webpack.

For this phase, you'll be using the `Clock` class you previously wrote in the
[Intro to Callbacks exercises][clock]. A key idea in web development is making
sure that every time the state changes, the UI also updates. You've previously
done this for games like Tic Tac Toe and Hanoi. Let's now implement that concept
in the `Clock` class you previously wrote.

Instead of the clock's publishing the time via the console, use the string
generated in the `.printTime` function to render your clock on the DOM using the
`div` with the id of "clock". To accomplish this goal, use the `htmlGenerator`
you just created!

First, you'll need to make sure your clock is set up correctly. Outside of your
Clock class, create a variable named `clockElement` to get the DOM element with
the id of "clock". Below that variable, create another variable named `clock`
with a new instance of a `Clock`. Next you'll focus on altering your `Clock`
class to make sure it renders the time on the DOM.

Import and use the `htmlGenerator` function inside the `Clock` class to take the
string generated by `printTime()` and append it to the `clockElement`. You'll
also want to make sure that whenever a new clock is constructed the
`htmlGenerator` is also run to make sure that as soon as the page loads the
clock is visible. Test it out!

At this point, you've probably realized that your `htmlGenerator` generates HTML
a little too well. To make sure only one `<p>` tag is ever appended to your
`Clock`, you'll need to add a little logic to the `htmlGenerator` function. Do
this by checking if the incoming htmlElement has any `children`; if it does,
remove those children before appending any other elements.

**Hint:** Remember that `.children` will not return an array! For easier
iteration you can use `Array.from` to convert the `HTMLCollection` into an
array.

Well, well, will you look at the time? It's about time to head to the next
phase!

[clock]:
  https://assets.aaonline.io/fullstack/javascript/projects/functions_exercises/solution.zip

## Phase 2: Dropdown menu

You've probably implemented a dropdown using HTML and CSS before, but let's
build a fancier dropdown using JavaScript! Head to __src/dropdown.js__. At the
top of the file, you should find a POJO with a list of dog names and links to
information about each dog. The ultimate goal of this phase is to dynamically
convert the dog POJO into a dropdown with a list of dog names that a user can
click on for more information about that dog.

Start off by creating a function called `dogLinkCreator`. This function will be
responsible for iterating through the `dogs` POJO and returning an array of `li`
tags that represent each dog. Start off by iterating through the POJO, for each
dog you'll need to:

1. Create an `a` tag.
2. Set the `a` tag's `innerHTML` to be the dog's name.
3. Set the `a` tag's `href` to be the dog's information link.
4. Create an `li` tag.
5. Give the `li` tag the class of 'dog-link'.
6. Append the `a` tag to the `li` tag.
7. Push the completed `li` into an array of the dog links completed so far.

Now write a second function called `attachDogLinks`. In this function invoke the
`dogLinkCreator` and assign the result to a variable named `dogLinks`. Now that
you have your `dogLinks` array iterate through it and attach each `li` to the
`ul` element with the class of `.drop-down-dog-list`. Then call your function at
the bottom of your file and you will see your dogs appear!

Nice, your dogs are on the page! Time to add a dropdown effect. You need to make
sure that the dogs won't appear unless the user's mouse has entered the "Here
Are Some Dogs!" message. You can do this by utilizing `eventListeners`!

Here is where the `dog-link` class you added to all your `li` links will come in
handy. By default, use CSS to hide all of your `li`s when the page is loaded.
Then write two functions--`handleEnter` and `handleLeave`--to make your dog
links appear and disappear. **Remember you can add and remove CSS classes using
javascript!**

Next, add your two new eventHandlers to an element on the page so that on
[`mouseenter`][mouse-enter] the dog's links will appear and on
[`mouseleave`][mouse-leave] the links will disappear. Think carefully about
where you want to attach your two [event listeners][event-listener]. Keep in
mind [event delegation][event-delegation]-- you want to be able to hover on and
click the dogs links without the dropdown disappearing.

[event-listener]:
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
[event-delegation]: https://davidwalsh.name/event-delegate
[mouse-enter]:
  https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
[mouse-leave]:
  https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event

### Style break!

Take no more than 30 minutes and try styling what you've done so far. Add some
[colors] or some [fonts] for extra fun!

[fonts]: https://fonts.google.com/
[colors]: https://coolors.co/app

## Phase 3: Todo list

By now you've read about how to use localStorage to store data in a client's
browsers for later use. For this phase, you'll be creating a todo list that
will use localStorage to persist todos through page refreshes. Let's get to it!

In __index.html__ you'll see a form to add new todos. The expected behavior is
that you will enter text into the input box, click the `+ Add Todo` button, and
a new todo will populate on the `todos` `ul`. You'll also want an indication if
that todo is done or not, so you'll want to add a checkbox next to each todo.

First, create an empty array and set it to the variable `todos` that will live
outside the functions you'll be writing. This will be where all your `todos`
will live.

Next you'll want to set variables for two DOM elements, the `ul` with the class
of `todos` and the `form` element with the class of `add-todo-form`. These will
be the two elements that you'll be adding your eventListeners to.

For your event listeners, begin by creating a function called `addTodo` that
will listen for the `submit` event on the form. The `addTodo` function will:

1. Find the input with the name `add-todo` and set its value to a variable.
2. Create a new todo object with the value from `add-todo` and a `done` key set
   to false.
3. Push the `todo` object into the `todos` array.
4. Clear the `add-todo` input so that the user can easily enter another `todo`.

Now that you have the `todos` in an array you'll pass that array into another
function you will create called `populateList`. `populateList` will take each
todo in the array and map it into a `label` tag with a checkbox next to it. Then
wrap the `label` tag and the checkbox `input` into an outer `li` tag. Once each
todo is wrapped in an `li`, append them all onto the `ul` with the class of
`todos`. Make sure to call `populateList(todos)` inside your `addTodo` function
to make sure that the list properly populates when the user submits their todo.
Now set up your new `addTodo` `eventListener` to listen for the "submit" event
on your form element.

Now that you've got your list showing up, it's time to store it in
[localStorage][localstorage]. Your goal is that whenever a user refreshes the
page, all the todos they've previously stored will be saved and can then be
displayed to the user again. In the `addTodo` function you'll want to use
`localStorage.setItem` to store the entire `todos` array whenever a new todo is
added. Remember, however, that localStorage can only store strings. You can use
JSON's [`parse`][parse] and [`stringify`][stringify] to get your todos array in
and out of localStorage intact.

Set up your `todos` array so that it will be empty unless `localStorage.getItem`
returns something. Then when you reload the page, you can fetch the user's todos
out of localStorage to display to the user.

The final thing you'll need to tackle is making sure your todo items stay done!
Write a new event listener that will trigger every time a checkbox is clicked.
You'll probably need to know which checkbox is being clicked - and you can store
that information on the checkbox element itself by utilizing the [data
attribute][data]. Keep in mind [event delegation][event-delegation]-- make sure
whatever is listening for the click will always be on the page.

[localstorage]:
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[parse]: https://www.w3schools.com/js/js_json_parse.asp
[stringify]: https://www.w3schools.com/js/js_json_stringify.asp
[data]:
  https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

## Phase 4: Slide-in on scroll

Time to explore an issue that can heavily impact performance. For this phase,
you'll be implementing a "scroll down and slide in" effect for a couple of
pictures. In __index.html__ you'll see some `img` tags that are currently
invisible on the page. The desired end goal is to have those images
**magically** slide in when you scroll down the page to a certain point.

In __src/slide-scroll.js__, the first thing you'll want to do is set up an event
listener on the `window` for the scroll event. Try `console.log`ing inside that
function to see how many times the event happens as you scroll down the page.
You'll probably notice you are logging about 10+ events before you even get to
the bottom of the page. That might not seem like a lot, but imagine this page
was hundreds of paragraphs long (like a law document or something); the scroll
event could trigger hundreds of times. That's a performance hit. That is also
where **debouncing** comes in. To read more about this idea see
[here][debounce], and view the demo from last night [here][debounce-demo].
You'll see that you've been provided a debouncing function, so utilize that
function to make your event listener more efficient.

Next, it's time to make those images actually show up when you scroll down. If
you look in __styles.css__, you'll see you've been provided with all the classes
you need for this effect.

You only want the image to slide in when the user has scrolled down to the exact
middle of the picture. You also want the image to disappear once the user has
scrolled past the image (so if the user scrolls up from the bottom the image
slides in again). Math time! You'll need to figure out:

1. Where the image should slide in
2. Where the bottom of the image is
3. Whether the picture is being half-shown on the page currently
4. If the image has been scrolled past

**Hint:** Look at the properties on the window API and on the image tags to get
the information you need. Don't be afraid to `console.log` values to make sure
you understand the properties you are using!

Finally, add your 'css' classes and you are good to go!

[debounce]:
  https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
[debounce-demo]:
  https://css-tricks.com/debouncing-throttling-explained-examples/

### Style break!

Take no more than 20 minutes and try styling what you've done so far. Take a
look at some [colors] or [fonts] if you'd like to.

[fonts]: https://fonts.google.com/
[colors]: https://coolors.co/app

## Bonus 1: Filtered search

For the next phase, you'll be creating a Pokemon search that will filter based
on what the user types in. Sounds neat right?

Head over to __src/search.js__. You'll be using the browser's built-in [fetch
API][fetch-api] to make a new HTTP request to fetch the data for filtering. So
start off by using the provided `pokemonAPI` variable to fetch data. Store the
`response` you receive in an array.

Now that you have the data, write a function to `findMatches`. The `findMatches`
function should receive a word to match and the pokemon array to search through.
To find a match you'll need to filter through the pokemon array using [Regular
Expressions][regex] and the [`match`][match] function to see if any of your
accrued pokemon names match the word passed in.

From there the final step will be to display the found matches to the user. The
next function you write--`displayMatches`--will not only display matches to the
user but will also be your `eventListener` for when a user enters information
into the input with the class of `search`.

The `displayMatches` function should:

1. Call the `findMatches` function with the fetched pokemon and the word to
   match, setting the result to a `matchArray` variable
2. Iterate through the `matchArray` and create an `li` for each pokemon returned
3. Append the `li`s with the matching pokemon to the `ul` with the class of
   `suggestions`

Finally add an eventListener for `displayMatches` to the "keyup" and "change"
events on the `input` with a class of `search`.

Great job! You are officially the cool kid with the Pokemon search. 😎

[fetch-api]:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[match]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
[regex]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

## Bonus 2: Show them the weather!

As the name of this phase suggests, you will show a user the current weather for
their location. To find a user's location, you can use the handy dandy
[geolocation API][geo]. For getting the current weather, use the [open weather
API][weather].

- Review the [open weather API][weather] documentation. Use this API to get the
  weather based on your current location. (We recommend fetching the weather by
  geographic coordinates).

- To get the API to accept your HTTP requests, you'll need an API key.
  (Read up on how to use the API key and sign up for one [here][api-key].) After
  signing up, click on the API keys tab to get your key. You may need to open
  their welcome email before the API key will work.

**N.B.:** In the real world, be **VERY CAREFUL** about placing API keys
in frontend JavaScript or anywhere else they are publicly available and could be
scraped. (This includes public Git repos!) Stolen keys can cost you. **You have
been warned.**

- Now let's get your current location! Write a function that will call
  `navigator.geolocation.getCurrentPosition` to get it. Read through the
  [documentation][geo] to figure out how to use this function properly. (Make
  sure you have [location services enabled][location-services] in your browser
  or this won't work.)

- When the current location is received, use a callback to query the weather API
  using a raw, Vanilla JavaScript `XMLHttpRequest`.
  - See [here][vanilla-ajax] and [here][nojquery] for help with the
    XMLHttpRequest.
  - For more in-depth details, look at the [XMLHttpRequest Docs][xmlhttpdocs]
  - **Hint 1:** Pass a callback to your location query that takes a `location`
    argument. `console.log` that argument to figure out how to extract the
    information you need, then build your `XMLHttpRequest`.
  - **Hint 2:** Build out the URI of your API request piece by piece using the
    coordinates in the location argument and your API key.
  - Common pitfall: You need to include `http://` in your request URI.
  - If you're spending more than 25 minutes setting up your request, ask an
    Instructor for help!
- Render the current city and temperature on the page.
  - **N.B.:** By default, the OpenWeatherMap API will return the temperature in
    Standard units (Kelvin). Convert to Fahrenheit **OR** peruse the API docs
    for a way to request the weather in Imperial units (Fahrenheit)!

Congrats! You've completed five pocket projects that look great on any resume!
Pat yourself on the back and take some time to style everything fabulously.

[geo]: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
[weather]: http://openweathermap.org/current
[api-key]: https://openweathermap.org/appid
[location-services]: https://support.google.com/chrome/answer/142065?hl=en
[vanilla-ajax]:
  http://stackoverflow.com/questions/8567114/how-to-make-an-ajax-call-without-jquery
[nojquery]: http://youmightnotneedjquery.com/#request
[xmlhttpdocs]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
