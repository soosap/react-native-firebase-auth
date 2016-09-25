import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			error: '',
			isLoading: false,
			password: '',
		};
	}

	onButtonPress = () => {
		const { email, password } = this.state;

		this.setState({ error: '', isLoading: true });

		Firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess)
			.catch(() => {
				Firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess)
					.catch(this.onLoginFailure);
			});
	};

	onLoginSuccess = () => {
		this.setState({ email: '', password: '', isLoading: false, error: '' });
	};

	onLoginFailure = () => {
		this.setState({ error: 'Authentication failed.', isLoading: false });
	};

	renderButton = () => {
			if (this.state.isLoading) {
				return <Spinner size="small" />;
			}

			return (
				<Button onPress={this.onButtonPress}>Register</Button>
			);
	};

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="i.e. seetha@saronia.io"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder="i.e. s3cret"
						onChangeText={password => this.setState({ password })}
						secureTextEntry
						value={this.state.password}
					/>
				</CardSection>
				
				<Text style={styles.error}>{this.state.error}</Text>
				
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	error: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	},
});

export default LoginForm;
