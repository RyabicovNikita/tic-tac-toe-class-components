import './FieldLayout.css';

export function FieldLayout({ handleClick, fields }) {
	return (
		<div className="w-500 p-10 bg-black flex items-center justify-center flex-wrap border-20 border-solid border-main-color rounded-2xl text-main-color">
			{fields?.length &&
				fields.map((item, index) => (
					<button
						key={index}
						className="w-2/6 h-40 text-center border-solid border-5 border-main-color cursor-pointer box-border"
						onClick={() => handleClick(index)}
					>
						{item}
					</button>
				))}
		</div>
	);
}
