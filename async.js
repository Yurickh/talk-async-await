async function anAsyncFun() {
  return "I'm an async function"
}

console.log(anAsyncFun())

anAsyncFun()
  .then((value) => {
    console.log(value)
  })

// async rejection

async function failedPromise() {
  throw Error('an typo')
}

failedPromise()
  .catch(error => {
    console.log(error)
  })

function asynk(callback) {
  return new Promise((resolve, reject) => {
    try {
      resolve(callback)
    } catch (exception) {
      reject(exception)
    }
  })
}

async function asyncHandler() {
  const value = await anAsyncFun()

  console.log(value)
}
asyncHandler()

const constantPromise = async () => 4
const squarePromise = async constant => (constant ** 2)
const minusPromise = async (value, minus) => (value - minus)
const rejectPromise = async value => { throw Error(value) }
const handleError = error => console.log('We have an error:', error)

async function asyncHandler2() {
  try {
    const value = await constantPromise()
    const square = await squarePromise(value)
    const minus = await minusPromise(square, 10)
    await rejectPromise(minus)
  } catch (exception) {
    handleError(exception.message)
  }
}
asyncHandler2()
