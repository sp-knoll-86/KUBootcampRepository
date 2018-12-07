# Updates, Deletes and Drops

## Instructions

* Go back to your classroom database.

```
db
use classroom
```

1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

```
db.students.update({name: "Steve"}, {$push: {"hobbies":"Extreme Basketweaving"}})
```

2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

```
db.students.update({name: [name of neighbor]}, {$set: {os:[name of another os]}})
```

3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

```
db.students.remove({name: [name of another neighbor]})
```

4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.

```
db.students.update({}, {$set: {gavecandy:false}}, {multi:true})
```

5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

```
db.students.update({name:'Steve'}, {$set: {gavecandy:true}})
```
