package com.mealtracker;

import java.util.ArrayList;

class Food {

    private final String mName;
    private final Category mCategory;
    
    private final double mCalories;
    private final double mCarbohydrates;
    private final double mFat;
    private final double mProtein;

    private final ArrayList<Category> mCategories = new ArrayList<>();

    Food(String name, double carbs, double fat, double protein, Category category) {
        this.mName = name;
        this.mCategory = category;

        this.mCarbohydrates = carbs;
        this.mFat = fat;
        this.mProtein = protein;

        this.mCalories = calculateCalories(carbs, fat, protein);
    }

    private static double calculateCalories(double carbs, double fat, double protein) {
        return 9 * fat + 4 * carbs + 4 * protein;
    }

    double getCalories() {
        return this.mCalories;
    }

    double getCarbohydrates() {
        return this.mCarbohydrates;
    }

    Category getCategory() {
        return this.mCategory;
    }

    double getFat() {
        return this.mFat;
    }

    double getProtein() {
        return this.mProtein;
    }

    String getName() {
        return this.mName;
    }

    void addCategory(Category category) {
        this.mCategories.add(category);
    }
}