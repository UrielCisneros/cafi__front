import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ({order}) => { 
    const paypalConf = {  //Configuracion de paypal
        currency: 'MXN', //MOneda que estaremos trabaando 
        env: 'sandbox', //en produccion sera production
        client:{
            sandbox: 'Ad1fEJPij45ycuN1gkJoIAQCUCrLwrioR_iCHzakfx6gS_2t4xqBuFJxmQRQWJp0xcrp2SeKVNzaSPrK', //el id del cliente que cleaste en sandBox
            production: '-- id--' //el id de produccion
        },
        style:{
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'blue'
        }
    };

    const PaypalButton = paypal.Button.driver('react', { React, ReactDOM });

    const payment = (data, actions) => {
        const payment  = {
            transactions: [
                {
                   amount: {
                       total: order.total, //total de la orden
                       currency: paypalConf.currency //moneda que trabajara
                   },
                   description: 'Compra en test App', // descripcion que aparece en la orden 
                   custom: order.customer || '' , // customer que se recibe de la orden
                   item_list: {
                       items: order.items //arreglo
                   }
                }
            ], //informacion de la orden que queremos procesar
            note_to_payer: 'Contactanos para cualquier aclaracion' //Nota para el comprador
        };

        return actions.payment.create({ payment });
    };

    const onAuthorize = (data, actions) => { // funcion encargada del proceso de pago por medio de paypal
        return actions.payment.execute()
        .then(response => {
            console.log(response);
            alert(`El pago fue proceado correctamente, ID: ${response.id}` );
        })
        .catch(error => {
            console.log(error);
            alert('Ocurrio un error al procesar el pago con Paypal')
        });
    };

    const onError = (error) => {
        console.log(error);
        alert('El pago no fue realizado, vuelva a intentarlo');
    };

    const onCancel = (data, actions)  => {
        alert('Pago no realizado, el usuario cancelo el proceso')
    };

    return(
        <PaypalButton 
            env={paypalConf.env}  //entorno en el cual va a trabajar
            client={paypalConf.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(error) => onError(error)}
            style={paypalConf.style}
            commit
            locale="es_MX"
        />
    );
 };


export default PaypalCheckoutButton;