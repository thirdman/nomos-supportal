import React from 'react';
import cx from 'classnames';
import { Icon } from 'components';

const styles = require('./InputRadio.scss');

const InputRadio = ({ isSelected, value }) => (
	<span
		className={cx(
			styles.InputRadio,
			(isSelected ? styles.selected : ''))}
	>
		<span className={styles.radioIcon} >
			<Icon
				icon={isSelected ? 'radio-selected' : 'radio-unselected'}
				classNameProps={['normal']}
			/>
		</span>
		<input
			value={value}
			id={'a123'}
			type={'radio'}
			className={styles.radio}
			checked={isSelected}
			onChange={() => { console.log('clicked!'); }}
		/>
		<label htmlFor={'a123'}>{value}</label>
	</span>
);

InputRadio.propTypes = {
	isSelected: React.PropTypes.bool,
	value: React.PropTypes.string
};

export default InputRadio;