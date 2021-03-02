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

    // 2- Count
    odoo.execute_kw('res.partner', 'search_count', params, function (err, value) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
    });

    // 4- Read
    odoo.execute_kw('res.partner', 'search', params, function (err, value) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push(value); //ids
        inParams.push(['name', 'website', 'email', 'lang']);
        var params = [];
        params.push(inParams);
        
        odoo.execute_kw('res.partner', 'read', params, function (err2, value2) {
            if (err2) { return console.log(err2); }
            console.log('Result: ', value2);
        });
    });

    var inParams = [];
    inParams.push({'name': 'Marlon'})
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'create', params, function (err, value) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
    });
    
});