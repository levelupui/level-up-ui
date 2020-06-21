import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Segment, Grid } from 'semantic-ui-react'
import './Fonts.css'

import Font from './Font'

function Fonts({ fonts }) {
	return (
		<Container className='Fonts'>
			<Segment textAlign='center'>
				<Header as='h2'>
					Font Pairing
				</Header>
				<Grid stackable columns={2}>
					{fonts.map((family, index) => 
					<Grid.Column key={index} ><Font font={family} /></Grid.Column> )}
				</Grid>
			</Segment>
		</Container>
	)
}

Fonts.propTypes = { fonts: PropTypes.array.isRequired, }

export default Fonts