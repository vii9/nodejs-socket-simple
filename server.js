const express = require('express');

const app = express();

const PORT = process.env.PORT || 9345;



app.listen(PORT, () => console.log(`Server running port ${PORT}`));
