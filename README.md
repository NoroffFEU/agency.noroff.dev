# agency.noroff.dev

Frontend web application for the Noroff Agency API

Documentations: [Link](./documentation/)

## Installing and starting the project

### Update! (by Hans M. Andreassen - Aug22FT)

Vite configured.
To simplify the changes made, some scripts have been removed and the already-used scripts have been changed to run Vite.
This was done so developers already using this won't have to adapt to new scripts and commands.

**NB! New HTML files must be added to the `vite.config.js` rollupOptions inputs!**

- Installation: `npm i`

- Local server: `npm run dev` or `npm run watch`

- Production build: `npm run build` (creates the dist folder and compiles)

- Production build preview: `npm run build-preview` (launches a local server that shows the project as it will show when deployed)

## Dependencies

### A front-end framework

Vanilla js stack

### UI framework

Bootstrap [NPM package](https://www.npmjs.com/package/bootstrap)

### Testing framework

jest [NPM package](https://www.npmjs.com/package/jest)
Cypress [NPM package](https://www.npmjs.com/package/cypress)

#### Other dependencies

dotenv [NPM package](https://www.npmjs.com/package/dotenv)
JSdoc [NPM package](https://www.npmjs.com/package/jsdoc)
prettier [NPM package](https://www.npmjs.com/package/prettier)
eslint [NPM package](https://www.npmjs.com/package/eslint)
SASS [NPM package](https://www.npmjs.com/package/sass)
Vite (for dev server work) [NPM package](https://www.npmjs.com/package/vite)
lint-staged [NPM package](https://www.npmjs.com/package/lint-staged)
husky [NPM package](https://www.npmjs.com/package/husky)
