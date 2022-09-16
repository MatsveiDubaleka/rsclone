export async function tryLogin(login : string, password : string) {
	let resp = await fetch(`https://rskinopoisk.herokuapp.com/auth/login`, {
		method: 'POST',
		body: JSON.stringify({
			username: login,
      password: password,
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	resp = await resp.json();
	return(resp);
}

export async function tryRegistration(login : string, password : string) {
	let resp = await fetch(`https://rskinopoisk.herokuapp.com/auth/registration`, {
		method: 'POST',
		body: JSON.stringify({
			username: login,
      password: password,
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	resp = await resp.json();
	return(resp);
}

export const setUsernameToLocalStorage = (login: string) => {
	localStorage.setItem("username", JSON.stringify(login));
}
