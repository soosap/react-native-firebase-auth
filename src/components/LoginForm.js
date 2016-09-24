import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		};
	}

	render() {
		return (
			<Card>
				<CardSection>
					<TextInput
						onChangeText={text => this.setState({ text })}
						style={{ height: 20, width: 100 }}
						value={this.state.text}
					/>
				</CardSection>
				<CardSection />
				<CardSection>
					<Button>Login</Button>
				</CardSection>				
			</Card>
		);
	}
}

const styles = StyleSheet.create({

});

export default LoginForm;
