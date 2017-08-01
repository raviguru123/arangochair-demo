const arangochair = require('./chair');

//const no4 = new arangochair('http://127.0.0.1:8529/'); // ArangoDB node to monitor

const no4 = new arangochair('http://127.0.0.1:8529/goparties1'); // ArangoDB node to monitor, with database name
// const no4 = new arangochair({
//     "url": "http://root:poiqwe@127.0.0.1:8529",
//     "database": "goparties1"
// });
//const no4 = new arangochair('http://root:poiqwe@127.0.0.1:8529/goparties1'); // ArangoDB node to monitor, with database name
no4.subscribe({ collection: 'party' });
no4.start();
no4.on('party', (doc, type) => {
    console.log("change some data", doc.toString('utf8'));
    // do something awesome

    // doc:Buffer
    // type:'insert/update'|'delete'
});

no4.on('error', (err, httpStatus, headers, body) => {
    // arangochair stops on errors
    // check last http request
    no4.start();
});


// subscribe to all events in the party collection
// no4.subscribe('party');

// // explicit
// no4.subscribe({ collection: 'party', events: ['insert/update', 'delete'] });


// // subscribe the party collection with only the delete event
// no4.subscribe({ collection: 'party', events: ['delete'] });

// // subscribe the party collection with only the delete event on key myKey
// no4.subscribe({ collection: 'party', events: ['delete'], keys: ['myKey'] });