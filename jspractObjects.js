

let user = {
  email: "example@gmail.com",
  password: "test1234",
  name: "John Doe"
}

function signUp(email, name, password) {
  user.email = email
  user.password = password
  user.name = name
}

signUp("michael@gmail.com", "Michael", "1234")
console.log(user.email, user.password, user.name)