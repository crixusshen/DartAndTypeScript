const foo0 = async () => 42;

foo0().then(e => console.log(e))  // 42

const deffer = new Promise((resolve, reject) => setTimeout(_ => resolve(2), 2000))

async function fooDeffer() {
  console.log(1)
  console.log(await deffer)
  console.log(3)
}

fooDeffer()