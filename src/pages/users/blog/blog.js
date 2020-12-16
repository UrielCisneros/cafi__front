import React from 'react';
import PaypalCheckoutButton from './PaypalButton';

export default function Blog() {

	//orden de prueba al cambiar el sistema debe generar conforme lo que usuario haga
	const order = {
		customer: '12345', //id del cliente
		total: '12.00', // total de la orden con dos decimales, pero total completo
		items: [       //items de lcompra o porductos
			{
				sku: '1234556', //id del producto
				name: 'camisa de react', //nombre del producto
				price: '12.00', //precio del producto
				quantity: '1', //cantidad de prodcuto
				currency: 'MXN' //moneda de trabajo
			}
		]
	};


	return (
		<div>
			<h2>Pagos con paypal</h2>

			<PaypalCheckoutButton 
				order={order} //parametro de la orden a realizar detallada anteriormente
			/>
		
		</div>
	);
}
