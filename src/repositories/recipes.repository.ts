import { Recipe } from '@/protocols/recipes';
import prisma from '../database/database'

async function getRecipes(name: string) {
    const recipes = await prisma.recipes.findMany({ where: { name: { contains: name, mode: 'insensitive' },  },  })
    return recipes
}


async function createRecipes({ name, description }: Recipe): Promise<void> {
    await prisma.recipes.create({ data: { name, description } })
}


async function updateRecipesDescription({ id, description }: Omit<Recipe, "name">) {
    await prisma.recipes.update({ data: { description }, where: { id } })
}

async function deleteRecipes(id: number) {
    await prisma.recipes.delete({where: {id}})
}
const recipesRepository = { getRecipes, createRecipes, updateRecipesDescription, deleteRecipes }

export { recipesRepository };