import { Injectable } from '@nestjs/common';

// Mocks
import allergens from './mocks/allergens.json';
import foodTypes from './mocks/foodTypes.json';
import ingredients from './mocks/ingredients.json';
import orders from './mocks/orders.json';
import pizzas from './mocks/pizzas.json';
import recipes from './mocks/recipes.json';

// Models
import { allergenType } from './models/allergen';
import { foodType } from './models/foodType';
import { ingredientType } from './models/ingredient';
import { orderType } from './models/order';
import { pizzaType } from './models/pizza';
import { recipeType } from './models/recipe';

@Injectable()
export class AppService {
  getAllergens(): allergenType[] {
    return allergens;
  }

  getFoodTypes(): foodType[] {
    return foodTypes;
  }

  getIngredients(): ingredientType[] {
    return ingredients;
  }

  getOrders(): orderType[] {
    return orders;
  }

  getPizzas(): pizzaType[] {
    return pizzas;
  }

  getRecipes(): recipeType[] {
    return recipes;
  }
}
