import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Models
import { allergenType } from './models/allergen';
import { foodType } from './models/foodType';
import { ingredientType } from './models/ingredient';
import { orderType } from './models/order';
import { pizzaType } from './models/pizza';
import { recipeType } from './models/recipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/allergens')
  getAllergens(): allergenType[] {
    return this.appService.getAllergens();
  }

  @Get('/foodTypes')
  getFoodTypes(): foodType[] {
    return this.appService.getFoodTypes();
  }

  @Get('/ingredients')
  getIngredients(): ingredientType[] {
    return this.appService.getIngredients();
  }

  @Get('/orders')
  getOrders(): orderType[] {
    return this.appService.getOrders();
  }

  @Get('/pizzas')
  getPizzas(): pizzaType[] {
    return this.appService.getPizzas();
  }
  @Get('/recipes')
  getRecipes(): recipeType[] {
    return this.appService.getRecipes();
  }
}
