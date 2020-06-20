import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Header, Grid, Container } from 'semantic-ui-react'
import './Colors.css'

import Color from './Color';

function Colors({ colors }) {
	return (
		<Container className="Colors">
			<Segment textAlign="center">
				<Header as='h2'>
					Color Palette
				</Header>
				<Grid columns={5}>
					{ colors.map((color, index) => 
					<Grid.Column key={index} style={{backgroundColor: color}}>
						<Color color={color} />
					</Grid.Column>)}
				</Grid>
			</Segment>
		</Container>
		
	)
}


Colors.propTypes = { colors: PropTypes.array.isRequired, }

export default Colors;