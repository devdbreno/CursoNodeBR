function getUser(callback) {
  setTimeout(() =>
    callback(null, {
      id: 1,
      name: 'Deivid Breno',
      dateOfBirthday: new Date(),
    }),
  )
}

function getTel(userId, callback) {
  setTimeout(() =>
    callback(null, {
      tel: '988234675',
      ddd: 71,
    }),
  )
}

function getAddress(userId, callback) {
  setTimeout(
    () =>
      callback(null, {
        street: 'Abbey Road',
        number: 3,
      }),
    2000,
  )
}

getUser((userError, user) => {
  if (userError) {
    console.error(`User failure: ${userError}`)
    return
  }

  getTel(user.id, (telError, tel) => {
    if (telError) {
      console.log(`Tel failure: ${telError}`)
      return
    }
    getAddress(user.id, (addressError, address) => {
      if (addressError) {
        console.log(`Address failure: ${addressError}`)
        return
      }

      console.log(`
        Name:     ${user.name}
        Address:  ${address.street}, ${address.number}
        Tel:      (${tel.ddd}) ${tel.tel}
        `)
    })
  })
})
