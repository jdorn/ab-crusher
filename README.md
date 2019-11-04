# ab-crusher

Features:
*  List of current and past AB tests
*  Intuitive results view with statistical calculations and visualizations
*  Tool for presenting results to a larger audience in a fun interactive way
*  List of Insights to keep track of learnings and onboard new team members 
*  Full REST api for interacting with data

## Project setup
```sh
# Front-end setup
yarn install

# Back-end setup
cd server
yarn install
```

### Development

#### Front-end

Start the Vue front-end: `yarn serve`

Start the mock API server: `yarn mock`

Before committing, make sure to lint and fix issues: `yarn lint`

#### Back-end

```sh
cd server
yarn start
```

If the openapi.yaml file changes, you can re-generate the back-end with `yarn gen:server`.  WARNING: This will 
overwrite all files in `/server/` EXCEPT for the services directory.

### Production

To compile and minify the Vue.js app: `yarn build`.

The output will be under `/dist`.