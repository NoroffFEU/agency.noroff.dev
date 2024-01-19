Hi, Front-End Developers. Here is a little info about naming conventions for files, classes/id's and functions in HTML and JavaScript.

This is set in stone to make it easier to have consistent naming and reduce the risk of naming clash with other files, classes/id's and functions.
We have went for the camelCase when it comes to naming, this is to ensure that it will be different from bootstrap classnames/id names.

Remember the easier things are the more happy everyone will be, KISS is a great rule of life.

## Naming conventions html classes/id's

#### camelCase

`ex: superAwesomeButton`

## Naming convention JavaScript functions

Short and descriptive, explain what the function actually does. If you have to use "and" you should see if the function can be refactored. E.g. _"This function formats time and displays it"._ This could be two functions. _"This function formats time", "This function displays time"._

Match file with function name.

#### camelCase

`ex: superAwesomeButtonListener`

`ex: createOfferListener`
`ex: createOffer`

## Naming convention for files

Be as descriptive as possible.

JS files `ex: createOfferListener.js` and `ex: createOffer.js`

#### Barrel exports

we are using the barrel export method `index.js` for handling exports.
`ex: export * from "./updateOffer.js"`

Happy Coding and remember DRY KISS
