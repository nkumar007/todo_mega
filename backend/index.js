const app = require("./app");
const { PORT } = process.env;

app.listen(PORT, () => `App listening at PORT: ${PORT}`);
