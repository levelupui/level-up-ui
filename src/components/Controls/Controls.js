import React from 'react'
import PropTypes from 'prop-types'
import { Container, Segment, Button, Icon } from 'semantic-ui-react'

import './Controls.css';

function Controls({ refresh }) {
	return (
		<Container className="Controls">
			<Segment textAlign="right">
				<Button secondary as='a' href='#' onClick={refresh}>
					<Icon name='sync' />
				</Button>
			</Segment>
		</Container>
	)
}

Controls.propTypes = {
	refresh: PropTypes.func.isRequired,
}

export default Controls;