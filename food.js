// Require the client
const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
 apiKey: 'c33b0471e6ab471e99aee1094594771e'
});

var food = { 'food': {
  'cheese': {
    'calories': 201,
    'fat': 25,
    'cholesterol': 17,
    'sodium': 12,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 25,
    'vitaminA': 10,
    'vitaminB': 6,
    'vitaminC': 0,
    'vitaminD': 3,
    'calcium': 36,
    'iron': 1,
    'potassium': 0
  },
  'meat': {
    'calories': 478,
    'fat': 18,
    'cholesterol': 81,
    'sodium': 7,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 174,
    'vitaminA': 0,
    'vitaminB': 30,
    'vitaminC': 0,
    'vitaminD': 8,
    'calcium': 2,
    'iron': 21,
    'potassium': 40
  },
  'chicken': {
    'calories': 425,
    'fat': 36,
    'cholesterol': 52,
    'sodium': 6,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 98,
    'vitaminA': 5,
    'vitaminB': 8,
    'vitaminC': 0,
    'vitaminD': 1,
    'calcium': 2,
    'iron': 12,
    'potassium': 11
  },
  'beef': {
    'calories': 213,
    'fat': 20,
    'cholesterol': 25,
    'sodium': 2,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 44,
    'vitaminA': 0,
    'vitaminB': 36,
    'vitaminC': 0,
    'vitaminD': 1,
    'calcium': 1,
    'iron': 12,
    'potassium': 7
  },
  'steak': {
    'calories': 213,
    'fat': 20,
    'cholesterol': 25,
    'sodium': 2,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 44,
    'vitaminA': 0,
    'vitaminB': 36,
    'vitaminC': 0,
    'vitaminD': 1,
    'calcium': 1,
    'iron': 12,
    'potassium': 7
  },
  'potato': {
    'calories': 77,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 6,
    'sugar': 2,
    'protein': 3,
    'vitaminA': 0,
    'vitaminB': 0,
    'vitaminC': 24,
    'vitaminD': 0,
    'calcium': 0,
    'iron': 3,
    'potassium': 9
  },
  'fries': {
    'calories': 77,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 6,
    'sugar': 0.6,
    'protein': 3,
    'vitaminA': 0,
    'vitaminB': 0,
    'vitaminC': 24,
    'vitaminD': 0,
    'calcium': 0,
    'iron': 3,
    'potassium': 9
  },
  'coffee':{
    'calories': 1,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 0,
    'vitaminA': 0,
    'vitaminB': 0,
    'vitaminC': 0,
    'vitaminD': 0,
    'calcium': 0,
    'iron': 0,
    'potassium': 3
  },
  'milk':{
    'calories': 103,
    'fat': 3,
    'cholesterol': 4,
    'sodium': 4,
    'dietaryfiber': 0,
    'sugar': 13,
    'protein': 16,
    'vitaminA': 2,
    'vitaminB': 18,
    'vitaminC': 0,
    'vitaminD': 0,
    'calcium': 30,
    'iron': 0,
    'potassium': 16
  },
  'orange': {
    'calories': 45,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 9,
    'sugar': 9,
    'protein': 1,
    'vitaminA': 4,
    'vitaminB': 0,
    'vitaminC': 85,
    'vitaminD': 0,
    'calcium': 3,
    'iron': 0,
    'potassium': 4
  },
  'orangejuice': {
    'calories': 39,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 0,
    'sugar': 7,
    'protein': 1,
    'vitaminA': 3,
    'vitaminB': 0,
    'vitaminC': 71,
    'vitaminD': 0,
    'calcium': 0,
    'iron': 1,
    'potassium': 4
  },
  'garlic':{
    'calories': 0,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 0,
    'vitaminA': 0,
    'vitaminB': 0,
    'vitaminC': 0,
    'vitaminD': 0,
    'calcium': 0,
    'iron': 0,
    'potassium': 0
  }
}
}
var meal = { 'meal': {
  'total': {
    'calories': 0,
    'fat': 0,
    'cholesterol': 0,
    'sodium': 0,
    'dietaryfiber': 0,
    'sugar': 0,
    'protein': 0,
    'vitaminA': 0,
    'vitaminB': 0,
    'vitaminC': 0,
    'vitaminD': 0,
    'calcium': 0,
    'iron': 0,
    'potassium': 0
  }
}
}

function addNutrients(item){
  meal.meal.total.calories += food.food[item].calories;
  meal.meal.total.fat += food.food[item].fat;
  meal.meal.total.cholesterol += food.food[item].cholesterol;
  meal.meal.total.sodium += food.food[item].sodium;
  meal.meal.total.dietaryfiber += food.food[item].dietaryfiber;
  meal.meal.total.sugar += food.food[item].sugar;
  meal.meal.total.protein += food.food[item].protein;
  meal.meal.total.vitaminA += food.food[item].vitaminA;
  meal.meal.total.vitaminB += food.food[item].vitaminB;
  meal.meal.total.vitaminC += food.food[item].vitaminC;
  meal.meal.total.vitaminD += food.food[item].vitaminD;
  meal.meal.total.calcium += food.food[item].calcium;
  meal.meal.total.iron += food.food[item].iron;
  meal.meal.total.potassium += food.food[item].potassium;
  meal.meal[item] = food.food[item];
}

function goodStuff(URL){
  app.models.predict("bd367be194cf45149e75f01d59f77ba7", URL).then(
      function(response) {
        for (i = 0; i < response.outputs[0].data.concepts.length; i++){
          if (response.outputs[0].data.concepts[i].value > 0.7){
            //console.log(JSON.stringify(response.outputs[0].data.concepts[i].name, null, 3));
            var item = response.outputs[0].data.concepts[i].name.replace(/['"]+/g, '');
            addNutrients(item);
          }
        }
        console.log(JSON.stringify(meal, null, 3));
      },
      function(err) {
        console.log('error');
      }
    );
}

goodStuff("https://i.imgur.com/AJB5f8J.jpg");
