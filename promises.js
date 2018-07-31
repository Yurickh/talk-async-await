// promise acceptance

const simplePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I'm a promise")
  }, 1000)
})

console.log(simplePromise)

simplePromise.then(ret => {
  console.log(ret)
})

// promise rejection

const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('This is a shame')
  }, 1000)
})

failedPromise
  .then(ret => {
    console.log(ret)
  })
  .catch(ret => {
    console.log(ret)
  })

// promise chaining

const constantPromise = Promise.resolve(4)
const squarePromise = constant => Promise.resolve(constant ** 2)
const minusPromise = (value, minus) => Promise.resolve(value - minus)
const rejectPromise = value => Promise.reject(value)
const handleError = error => console.log('We have an error:', error)

// constantPromise |> squarePromise |> minusPromise(10)  |> rejectPromise
// handle error with handleError

constantPromise
  .then(constant => {
    return squarePromise(constant)
      .then(square => {
        return minusPromise(square, 10)
          .then(less => {
            return rejectPromise(less)
              .catch(handleError)
          })
      })
  })

constantPromise
  .then(squarePromise)
  .then(square => minusPromise(square, 10))
  .then(rejectPromise)
  .catch(handleError)
