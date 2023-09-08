import { app } from "./infra/server";

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on door: ${PORT}`)
})