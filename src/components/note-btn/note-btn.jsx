import React from 'react'
import NoteColorChanger from '../note-color-changer/note-color-changer';

import './note-btn.scss'

const NoteBtn = ({ title, onClick, type }) => {
	let className = "note-btn " + type;

	if (type == "note-color-change-btn") {
		return (
			<button onClick={(e) => e.preventDefault} className={className}>
				<NoteColorChanger />
				<span className="note-btn-title">{title}</span>
			</button>
		)
	}

	return (
		<button onClick={onClick} className={className}>
			<span className="note-btn-title">{title}</span>
		</button>
	)
}

export default NoteBtn;
