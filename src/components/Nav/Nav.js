import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import './Nav.css'

export default function Nav() {
	return (
		<Menu as='nav' className="Nav" inverted={true}>
			<Container>
				<Menu.Item as='div'>
					<img src="./img/logo.png" alt=""/>
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item as='a' href="#">
						Home
					</Menu.Item>
					<Menu.Item as='a' href="#" inverted={true}>
						Tutorials
					</Menu.Item>
					<Menu.Item as='a' href="#" active={true}>
						Challenges
					</Menu.Item>
					<Menu.Item as='a' href="#">
						Shop
					</Menu.Item>
				</Menu.Menu>
			</Container>
		</Menu>
	)
}
