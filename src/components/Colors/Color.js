import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popup, Icon } from 'semantic-ui-react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Color.css'

const converter = require('color-converter').default

function Color({ color }) {
	
	const rgb = converter.fromHex(color).toRGB()
	const hsl = converter.fromHex(color).toHSL()
	console.log(hsl);
	const hslTxt = `${Math.trunc(hsl.h * 100)} ${Math.trunc(hsl.s * 100)} ${Math.trunc(hsl.l * 100)}`;
	const hslCode = `hsl(${Math.trunc(hsl.h * 100)}, ${Math.trunc(hsl.s * 100)}, ${Math.trunc(hsl.l * 100)});`

	return (
		<Table className="Color" inverted={(hsl.l < .4) ? true : false}>
			<Table.Row>
				<Table.Cell>HEX</Table.Cell>
				<Popup
				content={<Icon name='copy outline'/>}
				trigger={<CopyToClipboard text={color}>
					<Table.Cell>{color}</Table.Cell>
				</CopyToClipboard>}
				/>
			</Table.Row>
			<Table.Row>
				<Table.Cell>RGB</Table.Cell>
				<Popup 
				content={<Icon name='copy outline'/>}
				trigger={<CopyToClipboard text={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b});`}>
					<Table.Cell>
						{`${rgb.r} ${rgb.g} ${rgb.b}`}
					</Table.Cell>
				</CopyToClipboard>}
				/>
			</Table.Row>
			<Table.Row>
				<Table.Cell>HSL</Table.Cell>
				<Popup 
				content={<Icon name='copy outline'/>}
				trigger={<CopyToClipboard text={hslCode}>
					<Table.Cell>
						{hslTxt}
					</Table.Cell>
				</CopyToClipboard>}
				/>
			</Table.Row>
		</Table>
	)
}

Color.propTypes = { color: PropTypes.string.isRequired, }

export default Color;