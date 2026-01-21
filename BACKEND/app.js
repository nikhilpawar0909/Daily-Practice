import figlet from "figlet";

async function FigletFun() {
  const text = await figlet.text("I am Nikhil..!");
  console.log(text);
}

FigletFun();