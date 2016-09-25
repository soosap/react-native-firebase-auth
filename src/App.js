import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentDidMount() {
		this.setState({ firebaseRef: new Firebase('https://react-native-fbauth.firebaseio.com/') });
	componentWillMount() {
		Firebase.initializeApp({
			apiKey: 'AIzaSyCXt5Pd_XOoA6VAGoX4lIK-bsZXQ5vXNXQ',
			authDomain: 'react-native-fbauth.firebaseapp.com',
			databaseURL: 'https://react-native-fbauth.firebaseio.com',
			storageBucket: 'react-native-fbauth.appspot.com',
			messagingSenderId: '345393354397',
		});

		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ isLoggedIn: true });
			} else {
				this.setState({ isLoggedIn: false });
			}
		});
	}

	render() {
		return (
			<View>
				<Header title="FirebaseAuth" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
