const express = require('express');
const log = require('pretty-log');

const app = express();
const PORT = 3000;

// Elke keer dat iemand de website bezoekt, print dit een bericht
app.use((req, res, next) => {
    log.debug(`Iemand heeft de website bezocht om ${new Date().toLocaleTimeString()}`);
    next();
});

// Hoofdpagina
app.get('/', (req, res) => {
    log.success('Iemand is op de hoofdpagina!');
    res.send('<h1>Mijn eerste webserver!</h1><p>Het werkt! Kijk in je terminal voor berichten.</p>');
});

// Start de server
app.listen(PORT, () => {
    log.success(`Server is gestart! Ga naar: http://localhost:3000`);
}); 