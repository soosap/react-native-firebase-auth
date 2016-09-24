import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentDidMount() {
		this.setState({ firebaseRef: new Firebase('https://react-native-fbauth.firebaseio.com/') });
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
