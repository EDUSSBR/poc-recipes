import { Recipe } from "@/protocols/recipes";
import Joi from "joi"
type Qualquer = {
    name: string
    description: string
}
const createRecipeSchema = Joi.object<Recipe>({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(400).required()
});

const updateRecipeSchema = Joi.object<Recipe>({
    name: Joi.string().min(3).max(100).optional(),
    description: Joi.string().min(3).max(400).optional()
});

export { createRecipeSchema, updateRecipeSchema }