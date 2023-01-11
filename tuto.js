import Express from 'Express';

const app = Express();

var carros = ['gol', 'voyage'];

app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/sobre', (req, res) =>
res.send("<h3>Inicio</h3><p>novas rotas")
);

app.get('/users/:name', (req, res) =>{
    return res.json([ name ]);
});

app.post('/skill/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = "fusca";
    return res.json([carros[(carros.length - 1)]]);
});

app.get('/skill/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
}); 

app.put('/skill/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = "Fiesta";
    return res.json(carros[req.params.id]);
});


app.listen(3002, () => 
console.log('Servidor iniciado na porta 3002')
);
