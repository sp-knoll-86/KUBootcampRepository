package com.mealtracker;

class User {

    public final String mFirstName;
    public final String mLastName;
    public final String mEmail;
    public final double mTargetAdherence;

    User(String firstName, String lastName, String email, double target) {
        this.mFirstName = firstName;
        this.mLastName = lastName;
        this.mEmail = email;
        this.mTargetAdherence = target;
    }

    String getFirstName() {
        return this.mFirstName;
    }

    String getLastName() {
        return this.mLastName;
    }

    String getEmail() {
        return this.mEmail;
    }

    double getTargetAdherence() {
        return this.mTargetAdherence;
    }

}