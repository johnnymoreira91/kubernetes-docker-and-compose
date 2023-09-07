import { GenPersonController } from "./GenPersonController";
import { GenPersonUseCase } from "./GenPersonUseCase";

const useCase = new GenPersonUseCase()
const genPersonController = new GenPersonController(useCase)

export {
  genPersonController
}