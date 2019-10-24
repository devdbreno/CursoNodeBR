function getUser() {
	return new Promise((resolve, reject) =>
		setTimeout(() =>
			resolve({
				id: 1,
				name: 'Deivid Breno',
				dateOfBirthday: new Date(),
			}),
		),
	);
}

function getTel(userId) {
	return new Promise((resolve, reject) =>
		setTimeout(() =>
			resolve(
				{
					tel: '988234675',
					ddd: 71,
				},
				2000,
			),
		),
	);
}

function getAddress(userId) {
	return new Promise((resolve, reject) =>
		setTimeout(
			() =>
				resolve({
					street: 'Abbey Road',
					number: 3,
				}),
			2000,
		),
	);
}

const userPromise = getUser();
const telPromise = getTel();

userPromise
	.then(user =>
		telPromise.then(tel =>
			console.log(`
          User name:  ${user.name}
          User tel:   (${tel.ddd}) ${tel.tel}
      `),
		),
	)
	.catch(error => console.error('Something failed:\n', error));

// getUser((userError, user) => {
//   if (userError) {
//     console.error(`User failure: ${userError}`)
//     return
//   }

//   getTel(user.id, (telError, tel) => {
//     if (telError) {
//       console.log(`Tel failure: ${telError}`)
//       return
//     }
//     getAddress(user.id, (addressError, address) => {
//       if (addressError) {
//         console.log(`Address failure: ${addressError}`)
//         return
//       }

//       console.log(`
//         Name:     ${user.name}
//         Address:  ${address.street}, ${address.number}
//         Tel:      (${tel.ddd}) ${tel.tel}
//         `)
//     })
//   })
// })
