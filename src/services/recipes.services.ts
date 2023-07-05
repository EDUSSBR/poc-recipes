import { Recipe } from '@/protocols/recipes'
import {recipesRepository} from '@/repositories'
import { ErrorMessage } from '@/protocols/errors'
async function getRecipes(name: string) {
    return await recipesRepository.getRecipes(name)
}
async function createRecipes(recipe: Recipe) {
    return await recipesRepository.createRecipes(recipe)
}
async function updateRecipesDescription({ id, description }: Omit<Recipe, "name">) {
    return await recipesRepository.updateRecipesDescription({ id, description })
}
async function deleteRecipes(id: number) {
    return await recipesRepository.deleteRecipes(id)
}



const recipesServices = { getRecipes, createRecipes, updateRecipesDescription, deleteRecipes }
export default recipesServices