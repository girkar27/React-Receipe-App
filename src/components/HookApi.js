import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import { Control, Form } from 'react-redux-form';
import axios from 'axios'

function HookApi(){
	const [posts, setPosts]= useState([])
	const [error, setError]=useState('')
	const [loading, setLoading]=useState(true)

	useEffect(()=>{
		axios.get("https://jsonplaceholder.typicode.com/posts")
			.then(response =>{
				console.log(response)
				setLoading(false)
				setPosts(response.data)
				setError('')
			})
			.catch(err =>{
				console.log(err)
				setLoading(false)
				setPosts(posts)
				setError('something went wrong')
			})
	}, [])


	return(
		<div>
			<ul>
				{posts.map(post=>(
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	)
}


export default HookApi;