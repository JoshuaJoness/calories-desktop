import React from 'react'
import Nav from './Nav'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import axios from 'axios'


class Purchase extends React.Component {
	render(){
		return(
			<>
				<StripeProvider apiKey="pk_test_hxQO4xYhhgk3EdVhJ145q8Zv00HkUuTnRy">
					<div className="example">
						<h1>React Stripe Elements Example</h1>
						<Elements>
							<CheckoutForm />
						</Elements>
					</div>
				</StripeProvider>
			</>
		)
	}
}

export default Purchase
