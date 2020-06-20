import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Header } from 'semantic-ui-react'
import GoogleFontLoader from 'react-google-font-loader'

import './Font.css'

function Font({ font }) {
	const style = { fontFamily: font }

	return (
		<div className='Font'>
			<GoogleFontLoader
			fonts={[ { font } ]}
			/>
			<div style={style}>
				<Header as='h3'>{ font }</Header>
				<p>
					a b c d e f g h i j k l m n o p q r s t u v w x y z <br/> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br/> 0 1 2 3 4 5 6 7 8 9
				</p>
			</div>
			<p>
				<Button secondary as='a' href={`http://fonts.google.com/specimen/${font.replace(/\s/g, '+')}`} target='_blank'>
					Get Font
				</Button>
			</p>
		</div>
	)
}

Font.propTypes = { font: PropTypes.string.isRequired, }

export default Font