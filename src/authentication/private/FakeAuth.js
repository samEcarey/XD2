export const fakeAuth = {
	isAuthenticated: false,
	authenticate(e) {
		fakeAuth.isAuthenticated = true;
		// <p>Loading...</p>;
		setTimeout(e, 100); // fake async
	},
	signout(e) {
		fakeAuth.isAuthenticated = false;
		// <p>You are being logged out...</p>;
		setTimeout(e, 3000); // fake async
	}
};
