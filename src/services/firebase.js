import app from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	databaseURL: process.env.databaseURL,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	measurementId: process.env.measurementId,
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);

		this.auth = app.auth();
		this.store = app.firestore;
	}
	get votes() {
		return this.store().collection(`votes`);
	}
}

export default new Firebase;
