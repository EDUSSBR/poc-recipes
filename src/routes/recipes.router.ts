import { Router } from 'express'
import {getRecipes, createRecipes, updateRecipesDescription, deleteRecipes} from "../controllers"
import { validateSchema } from '../middlewares/validateSchema'
import { createRecipeSchema, updateRecipeSchema } from '../schemas'
const recipesRoute = Router()

recipesRoute.get("/recipes", getRecipes)
recipesRoute.post("/recipes",validateSchema(createRecipeSchema), createRecipes)
recipesRoute.put("/recipes/:id",validateSchema(updateRecipeSchema), updateRecipesDescription)
recipesRoute.delete("/recipes/:id", deleteRecipes)

// recipesRoute.post("/recipes", )
export { recipesRoute };