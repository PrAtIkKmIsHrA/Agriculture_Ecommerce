import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '@/components/organisms'
const BaseLayout = () => {
	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/login')
	}

	return (
		<>
			<Header />
			<main>
				<Outlet/>
			</main>
			
		</>
	)
}

export default BaseLayout
