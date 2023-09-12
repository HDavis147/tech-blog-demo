const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const api = require('./controllers/index');
const helpers = require('./utils/helpers');

// Sets port to required value for Heroku, or 3001
const PORT = process.env.PORT || 3001;

// Creates a new instance of Express
const app = express();

const hbs = exphbs.create({ helpers });

// Init Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware to handle json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/api', api);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);