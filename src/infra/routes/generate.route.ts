import { Router } from "express";
import { genPersonController } from "../../useCase/gen-person";

const route = Router()

route.get('/person', (req, res) => {
  return genPersonController.handle(req, res)
})

export {
  route as GenerateRouter
}