var Odoo = require('odoo-xmlrpc');

var odoo = new Odoo({
    url: '127.0.0.1',
    port: 8069,
    db: 'db14-spain',
    username: 'admin',
    password: 'x1234567890'
});

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([['active', '=', true]]);
    var params = [];
    params.push(inParams);

    // 1- Login
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');    
    });

    // 2- Use Search
    odoo.execute_kw('res.partner', 'search', params, function (err, value) {
        if (err) { return console.log(err); }
        value.forEach(element => console.log(element));
        console.log('Result: ', value);
    });
    
});