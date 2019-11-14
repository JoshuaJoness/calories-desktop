import React from 'react'
import Nav from './Nav'

class Info extends React.Component {
	render(){
		const styles = {
			whatWeOffer:{
				backgroundColor:'#303030',
				color:'#1E304F',
				fontFamily: "Yeon Sung, cursive",
				fontSize: '80px',
				fontWeight: 'bold',
				backgroundImage:'url("./dumbells.jpeg")'
			}
		}
		return(
			<>
				<Nav/>
				<div style={styles.barbell}>
					<div style={styles.whatWeOffer}><center>
						Here at Spirit Strength, our main tool of choice is the barbell. We believe that weight lifting can develop strength not only in the physical, but also in the mind and spirit.</center><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
					</div>
					<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				</div>
			</>
		)
	}
}

export default Info
