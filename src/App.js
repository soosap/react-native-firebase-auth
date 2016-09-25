import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: null,
		};
	}

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

	renderContent = () => {
		switch (this.state.isLoggedIn) {
			case true:
				return (
					<View>
						<Button onPress={() => Firebase.auth().signOut()}>
							Logout
						</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={styles.spinner}>
						<Spinner size="large" />
					</View>
			);
		}
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header title="FirebaseAuth" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default App;
