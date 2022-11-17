let users = new Map();
users.set("student 1", "grade A");
users.set("student 2", "grade B");
users.set("student 3", "grade A");
users.set("student 4", "grade B");

for (let user of users.values()){
    console.log('users' + user);
}
   