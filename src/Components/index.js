import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Homepage'><div>Homepage</div></Link>
		<Link to='/HomepageLogedIn'><div>HomepageLogedIn</div></Link>
	</div>
	)
}