import styles from './FieldLayout.module.css';

export function FieldLayout({ handleClick, fields }) {
	return (
		<div className={styles['fields-container']}>
			{fields?.length &&
				fields.map((item, index) => (
					<button
						key={index}
						className={`${styles['fields-container__field']} col-4`}
						onClick={() => handleClick(index)}
					>
						{item}
					</button>
				))}
		</div>
	);
}
