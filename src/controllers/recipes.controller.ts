import { Request, Response } from "express";
import recipesServices from '../services/recipes.services'
import { Recipe } from "@/protocols/recipes";
import {appError} from "../utils"

async function getRecipes(req: Request, res: Response): Promise<Response> {
    const { name="" } = req.query 
    const recipes = await recipesServices.getRecipes(String(name))
    return res.send(recipes)
}

async function createRecipes(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body as Recipe
    await recipesServices.createRecipes({ name, description })
    return res.sendStatus(201)
}

async function updateRecipesDescription(req: Request, res: Response): Promise<Response> {
    const { id } = req.params 
    const { description } = req.body as Recipe
    const numberID= parseInt(id)
    if (isNaN(numberID) || id===undefined){
        throw appError(404,"invalid id")
    }
    await recipesServices.updateRecipesDescription({ id: numberID, description })
    return res.sendStatus(200)
}

async function deleteRecipes(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    await recipesServices.deleteRecipes(parseInt(id))
    return res.sendStatus(200)
}



export { getRecipes, createRecipes, updateRecipesDescription, deleteRecipes }
