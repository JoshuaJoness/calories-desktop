import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import qs from 'qs'

const successPayment = data => {
  alert('Payment Successful');
};
const errorPayment = data => {
  alert('Payment Error');
};

class CheckoutForm extends Component {
	state = {
		email: ''
	}

	setEmail = (e) =>{
		let email = this.state.email
		email = e.target.value
		this.setState({email})
		console.log(this.state.email);
	}

	submit = (e) => {
		e.preventDefault()
		let token = this.props.stripe.createToken({}).then(token => {
			console.log(token.token.id)
			let email = this.state.email
			axios.post(`${process.env.REACT_APP_API}/payment`, {
  			data:
    		token.token.id,
				email

			}).then(successPayment).catch(errorPayment)
	})
}
  render() {
		const styles = {
			form: {
				width: '400px',
				height: '500px',
				backgroundColor: 'white',
				paddingTop: '5%',
				paddingLeft: '2.5%',
				paddingRight: '2.5%',
				borderRadius: '5%'
			}
		}
    return (
			<center>
      <form style={styles.form} onSubmit={this.submit}>
				<p>Please enter your email below:</p>
				<input type='text' label='Please enter your email' onChange={this.setEmail}></input>
        <p>Please enter your credit card information below and a copy of the essay will be emailed to you immediately!</p>
        <CardElement />
        <button>Purchase</button>
      </form>
			</center>
    )
  }
}

export default injectStripe(CheckoutForm);
