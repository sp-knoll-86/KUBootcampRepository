package com.mealtracker;

import java.util.ArrayList;

class Meal {

    private final ArrayList<Food> mFoods = new ArrayList<>();
    private final String mName;

    Meal (String name) {
        this.mName = name;
    }

    boolean isComplete() {
        boolean protein = false;
        boolean fat = false;
        boolean fruit = false;
        boolean vegetables = false;

        for (Food food : this.mFoods) {
            switch (food.getCategory()) {
                case Protein:
                    protein = true;
                    break;
                case Fat:
                    fat = true;
                    break;
                case Fruit:
                    fruit = true;
                    break;
                case Vegetable:
                    vegetables = true;
                    break;
            }
        }

        return fat && protein && vegetables && fruit;
    }

    double getCalories() {
        double calories = 0;

        for (Food food : this.mFoods) {
            calories += food.getCalories();
        }

        return calories;
    }

    double getFat() {
        double fat = 0;

        for (Food food : this.mFoods) {
            fat += food.getFat();
        }

        return fat;
    }

    
    double getCarbohydrates() {
        double carbohydrates = 0;

        for (Food food : this.mFoods) {
            carbohydrates += food.getCarbohydrates();
        }

        return carbohydrates;
    }

    double getProtein() {
        double protein = 0;

        for (Food food : this.mFoods) {
            protein += food.getProtein();
        }

        return protein;
    }

    String getName() {
        return this.mName;
    }

    void viewFoods() {
        for (Food food : this.mFoods) {
            System.out.println(food.getName());
        }
    }

}