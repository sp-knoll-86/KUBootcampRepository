# iSnippets - Homework instructions

### Overview

Your homework for this unit is to use ASP.NET to build a CRUD application that allows you to create, view, update, and delete useful code snippets. Think of it as the MVP for an app you'd use to keep track of idiomatic code samples in different languages.

### Preliminary Notes

Since you're learning both a new language _and_ a new framework, the basic requirements for this unit's homework assignment are fairly straightforward. 

You'll see two "tiers" listed below. Think of these as milestones. The first corresponds with basic competency with ASP.NET's major features. 

The second corresponds to familiarity with the tools you'll be using in real projects. This is the level required for full credit.

As always, feel free to Slack TAs or instructors if you get stuck. Keep [ASP.NET Documentation handy](https://docs.asp.net/en/latest/intro.html) handy, and best of luck!

### Instructions

#### Tier 1

Create a CRUD application in which users can save code snippets. 

A code snippet is simply a code sample of arbitrary length. The model should include a title; optional description; the code snippet itself; and a field recording the language of the snippet. 

Be sure that your detail view displays snippets correctly. In other words, ensure that it displays the code snippet itself in HTML `<pre>` tags.

#### Tier 2

Add validation rules to your model. You're free to decide what to validate, and how.

Add a search to the index page that lets users retrieve snippets written in a certain language, or whose descriptions contain a certain term.

- - -

#### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database. 

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details. 

- - -

#### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

**Good luck!**
