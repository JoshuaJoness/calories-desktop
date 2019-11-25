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
			},
			cardElement: {
				border: '1px solid black'
			}
		}
    return (
			<center>
      <form style={styles.form} onSubmit={this.submit}>
				<h2>Please complete the information below and a copy of the essay will be emailed to you immediately!</h2>e-mail: 
				<input type='text' label='Please enter your email' onChange={this.setEmail}></input>
				<br/><br/>
        <CardElement style={styles.cardElement}/>
        <button>Purchase</button>
      </form>
			</center>
    )
  }
}

export default injectStripe(CheckoutForm);
