export function TextWrapper ({header, body, done}) {
	return (
		<div>
			<h1>{header}</h1>
			<p>{body}</p>
			<button onClick={()=>done()}>Далее</button>
		</div>
	)
}

