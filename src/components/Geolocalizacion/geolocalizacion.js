import React, { useEffect } from 'react';

export default function Geolocalizacion({
	height,
	width,
	center,
	titleLayer,
	zoom,
	apikey,
	nombreMarcador,
	draggable
}) {
	useEffect(() => {
		//api key
		window.L.mapquest.key = apikey;

		var container = window.L.DomUtil.get('map');
		if (container != null) {
			container._leaflet_id = null;
		}

		//inicializar el map
		const map = window.L.mapquest.map('map', {
			center: center,
			layers: window.L.mapquest.tileLayer('map'),
			zoom
		});

		/* console.log(map); */

		window.L
			.marker(center, {
				icon: window.L.mapquest.icons.marker(),
				draggable: draggable
			})
			.bindPopup(nombreMarcador)
			.addTo(map);

		map.addControl(window.L.mapquest.control());
		/*  console.log(window.L.mapquest.control()) */
	});

	return (
		<div id="map" style={{ height: height, width: width }} className="d-flex justify-content-center align-items-center">
			<div className="spinner-border display-3" style={{ width: '10rem', height: '10rem' }} role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
