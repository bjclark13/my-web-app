const sayHello = () => {
  const hello = document.createElement("h1");
  hello.innerHTML = "Hello!";
  document.querySelector("main").append(hello);
};

module.exports = sayHello;
