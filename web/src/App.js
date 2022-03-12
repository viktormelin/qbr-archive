import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResourceName = '';

const transitions = {
	entering: {
		display: 'block',
	},
	entered: {
		opacity: 1,
		display: 'block',
	},
	exiting: {
		opacity: 0,
		display: 'block',
	},
	exited: {
		opacity: '0',
		display: 'none',
	},
};

export default function App() {
	const [open, setOpen] = useState(null);

	const OpeningMenu = (e) => {
		let data = e.data;
		switch (data.type) {
			case 'display':
				setOpen(true);
				break;
		}
	};

	const onKeyUp = (e) => {
		if (e.key === 'Escape') closeMenu();
	};

	const closeMenu = () => {
		fetch(`https://${ResourceName}/closeMenu`, {
			method: 'post',
			body: JSON.stringify({}),
		});

		setOpen(false);
	};

	useEffect(() => {
		window.addEventListener('message', OpeningMenu);
		return () => {
			window.removeEventListener('message', OpeningMenu);
		};
	}, []);

	useEffect(() => {
		window.addEventListener('keyup', onKeyUp);
		return () => {
			window.removeEventListener('keyup', onKeyUp);
		};
	}, []);

	return <>{open && <div></div>}</>;
}
