let data = [
    {
        item: 'Feed the dog'
    },
    {
        item: 'Finish work task'
    },
    {
        item: 'Learn Italian'
    }
];

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter(
            (todo) => todo.item.replace(/ /g, '-') !== req.params.item
        );
        res.json(data);
    });
};