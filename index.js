// config inicial 
const express = require('express'); 
const app = express(); 
const exphbs = require('express-handlebars'); 
const mongoose = require('mongoose');

// models
const Person = require('./models/Person');

// rotas 
const productsRoutes = require('./routes/productsRoutes');

// forma de ler o json middlewares 
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.use(express.json());

// config com handlebars 
app.engine('handlebars', exphbs.engine()); 
app.set('view engine', 'handlebars'); 


app.use(express.static('public')); 

// rota = products
app.use('/products', productsRoutes);

// entrega uma porta 
// variaveis de conecçao com o mongo
const DB_USER = 'joao_vitor'; 
const DB_PASSWORD = encodeURIComponent('IzbmrpQG2JvpRdW0')


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.mt06iey.mongodb.net/bancodaapi?retryWrites=true&w=majority`
).then(() => {
    app.listen(3000); 
    console.log('conectamos ao mongoDB');
}).catch()
