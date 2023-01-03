import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCLuH9OrEbZat5foxYhXteYAiwbh_NRZO0",
	authDomain: "art-store-87c2e.firebaseapp.com",
	projectId: "art-store-87c2e",
	storageBucket: "art-store-87c2e.appspot.com",
	messagingSenderId: "42359236396",
	appId: "1:42359236396:web:ba060eb8b300fc10ccae89",
	measurementId: "G-3851VDQKP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
