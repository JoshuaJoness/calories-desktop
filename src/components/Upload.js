import React from 'react'
import axios from 'axios'

class Upload extends React.Component {

	state = {

	}

	handleFile = (e) => {
		this.setState({file:e.target.files[0]})
	}

	handleUpload = (e) => {
		e.preventDefault()
		let file = this.state.file
		let formData = new FormData()
		formData.append('image',file)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		axios.post(`${process.env.REACT_APP_API}/upload`,
			formData,
			config)
			.then(res=>{
				alert('Success')
			}).catch(err=>{
				console.log(err);
			})}

	render(){
		return(
			<>
					<h1>File Upload</h1>
					<button onClick={this.practice}></button>
					<form onChange={this.handleUpload} encType='multipart/form-data'>
						<input name='image' type='file' onChange={(e)=>this.handleFile(e)}></input>
						<button type='submit'>Submit</button>
					</form>
			</>
		)
	}
}

export default Upload
