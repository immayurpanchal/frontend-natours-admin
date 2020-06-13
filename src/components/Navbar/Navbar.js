import { Button, Flex } from '@chakra-ui/core';
import React from 'react';

const Navbar = () => {
	return (
		<div>
			<Flex
				align='center'
				bg='gray.300'
				height='80px'
				color='white'
				fontFamily='Open Sans'
				justifyContent='flex-end'
				padding='0 20px 0 0'
			>
				<Button variantColor='orange' fontSize='lg'>
					Sign In
				</Button>
			</Flex>
		</div>
	);
};

export default Navbar;
