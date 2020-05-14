const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "userOne",
  email: "UserOne@example.com",
  password: "MyS!llyPassw0rd"
};

const badUser = {
  name: "badUser",
  email: "badUser@example.com",
  password: "MyS!llyPassw0rd"
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Souleymanesw",
      email: "Souley@example.com",
      password: "MyS!llyPassw0rd"
    })
    .expect(201);
});

test("Should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test("Should not login nonexisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: badUser.email,
      password: badUser.password
    })
    .expect(400);
});
