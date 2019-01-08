# Create a Meal Tracker Backend

For this unit's assignment, you will design and implement the back-end for a meal tracking application. The application will allow users to keep track of the meals they eat throughout the day; the foods they eat with each meal; and what percentage of their meals are "complete". 

### Meals & Foods

The heart of the application are the `Meal` and `Food` classes. 

The `Meal` class exposes the following API:

* `double getCalories`
* `double getFat`
* `double getCarbohydrates`
* `double getProtein`
* `String getName`
* `DateTime getMealTime`
* `void viewFoods`

You don't have to save a `MealTime` &mdash; it's just logical to do so. If you'd like to implement this, read about Java's [Date and Time Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/datetime.html), or use [Joda-Time](www.joda.org/joda-time/quickstart.htm).

When implementing `viewFoods`, simply print the name of each food in the meal.

The `Food` class exposes the following API:

* `double getCalories`
* `double getFat`
* `double getCarbohydrates`
* `double getProtein`
* `double getName`
* `ArrayList<Category> getCategories`
* `void addCategory`

Mind the similarities between these two classes when you start designing.

### Category

The `Category` class simply allows you to track which of the following categories a food belongs to:

* Fruit;
* Vegetable;
* Protein;
* Fat;
* Beverage.

You're free to add additional categories (dessert, etc.). __Hint__: Implement this with [enum types](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html).

### MealTracker

The `MealTracker` class is responsible for collecting all of the meals a `User` has eaten. As such, each `MealTracker` maintains a reference to a `User`. It exposes the following API:

* `void addMeal`
* `void viewMeals`
* `int getMealCount`
* `double getAdherence`
* `boolean isOnTrack`

_Adherence_ refers to what percentage of `Meal`s are "complete" &mdash; i.e., what percentage of meals contain Fruits; Vegetables; Protein; _and_ Fat. The `isOntrack` method determines whether this `User`'s adherence is above their "threshold."

The `viewMeals` method should print the name of each meal in the MealTracker.

### User

The `User` class is straightforward. It keeps track of a user's first and last names; email address; and age, as one would expect. The only application-specific field is `targetAdherence`. If we imagine that people use this application to improve their eating habits and eat more complete meals, `targetAdherence` represents their goal for healthy eating &mdash; i.e., what percentage of their meals they want to be complete.

For example, my goal might be to get to a point where nine out of every ten meals I eat are "complete." In that case, my `targetAdherence` would be `90`.

## Hints, Notes, & Suggestions

You'll notice that `Meal` and `Food` have some similarities. Take advantage of these similarities when you design your class hierarchy. You have a couple of valid options at your disposal.

You're free to implement the methods on `Meal` and `Food` however you'd like, but consider using them as opportunities to practice your `Stream` methods.

You should implement `Category` as an Enum type. You can read about them at the [Oracle website](https:://docs.oracle.com/javase/tutorial/java/javaOO/enum.html). Of course, since we didn't cover `enum` in class, you're not obligated to do it this way. It's worth trying, though—it's quite easy to do, and saves a lot of typing!

Finally, you might wish to test your application in a `Test` class, just to make sure everything works correctly. If you'd like an extra-credit challenge, use [JUnit](http://junit.org/junit4) to unit-test your code. 

- - -

#### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

__Good luck!__
