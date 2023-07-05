# poc-recipes API
This project was made only for testing some ts knowledge (Also contains an express api using postgres  as database). It's a simple api for creating and storing your most delicious food recipes =]

## Routes docs:

### Getting all recipes:
**GET** /recipes

### Filtering recipes:
**GET** /recipes?name=FILTER_by_the_name_you_want 

### Deleting Recipes:
**DELETE** /recipes/:id 

### Creating recipes
**POST** /recipes HTTP/1.1 <br />
Content-Type: application/json
```json
{
    "name": "A name for your recipe",
    "description": "A description"
}
```

### Updating recipes:
**PUT** /recipes/:id HTTP/1.1 <br />
Content-Type: application/json
```json
{   
    "description": "If you forget something, you can change the desccription again!"
}
```
