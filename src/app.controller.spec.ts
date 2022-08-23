import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Mocks
import allergens from './mocks/allergens.json';
import foodTypes from './mocks/foodTypes.json';
import ingredients from './mocks/ingredients.json';
import orders from './mocks/orders.json';
import pizzas from './mocks/pizzas.json';
import recipes from './mocks/recipes.json';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return allergens', () => {
      expect(appController.getAllergens()).toEqual(allergens);
    });

    it('should return foodTypes', () => {
      expect(appController.getFoodTypes()).toEqual(foodTypes);
    });

    it('should return foodTypes', () => {
      expect(appController.getIngredients()).toEqual(ingredients);
    });

    it('should return orders', () => {
      expect(appController.getIngredients()).toEqual(orders);
    });

    it('should return pizzas', () => {
      expect(appController.getPizzas()).toEqual(pizzas);
    });

    it('should return recipes', () => {
      expect(appController.getRecipes()).toEqual(recipes);
    });
  });
});
