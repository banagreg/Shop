import React from 'react'
import Directory from '../../components/Directory/Directory'
import { categories } from '../../constants/constants'

const Home = () => {
	return (
		<Directory categories={categories} />
	);
};

export default Home