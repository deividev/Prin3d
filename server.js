const express = require('express');
const app = express();
app.use(express.static('./dist/print3d'));
app.get('/*', (req, res) => res.sendFile('index.html', {root: 'dist/print3d/'}), );
app.listen(process.env.PORT || 8080);
