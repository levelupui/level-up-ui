import React from 'react'
import PropTypes from 'prop-types'
import { Container, Segment, Header } from 'semantic-ui-react'

import './Idea.css';

function Idea({ idea }) {
	return (
		<Container className='Idea'>
			<Segment textAlign="center">
				<Header as='h2'>
					App Idea
				</Header>
				<p>
					{ idea }
				</p>
			</Segment>
		</Container>
	)
}

Idea.propTypes = { 
	idea: PropTypes.string.isRequired
}

export default Idea;