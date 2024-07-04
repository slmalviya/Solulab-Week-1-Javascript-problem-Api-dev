const express = require("express");
const app = express();
const utilsRoutes = require("./src/routes/utilsRoutes");

app.use(express.json());

app.use("/api/utils", utilsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
