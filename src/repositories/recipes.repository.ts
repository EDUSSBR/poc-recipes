import { Recipe } from '@/protocols/recipes';
import { db } from '../database/database'

async function getRecipes(name: string): Promise<Recipe[]> {
    const recipes = await db.query<Recipe>(`SELECT * FROM recipes WHERE name ILIKE COALESCE(('%' ||$1 || '%'), '%') ;`, [name])
    return recipes.rows
}

async function createRecipes({ name, description }: Recipe): Promise<void> {
    await db.query<Recipe>(`INSERT INTO recipes (name, description) VALUES ($1, $2);`, [name, description])
}

async function updateRecipesDescription({ id, description }: Omit<Recipe, "name">) {
    await db.query<Recipe>(`UPDATE recipes SET description=$2 WHERE id=$1;`,[id, description])
}

async function deleteRecipes(id: number) {
    await db.query<Recipe>(`DELETE FROM recipes WHERE id=$1;`,[id])
}
const recipesRepository = { getRecipes, createRecipes, updateRecipesDescription, deleteRecipes }

export { recipesRepository };