const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const hbs = handlebars.create({});
hbs.handlebars.registerHelper('add', (a,b) => a + b);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('index', {
    title: 'Home Page',
  });
});


app.get('/guide', (req,res) => {
  res.render('guide', {
    title : 'guide',
  });
});

app.get('/about', (req,res) => {
  res.render('about', {
    title : 'about',
  });
});

app.use((req,res) => {
  res.status(404).send('<h1>404, oops not found!</h1>')
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});