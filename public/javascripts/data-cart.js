/**
 * data-cart.js
 * Xendit Checkout Demo
 * This file contains the dummy demo store cart data
 */

const cartData = [
    {
        country: 'Indonesia',
        cart: {
            order_items: [
                {
                    name: 'Tiket Bus',
                    datedep: '4 Juni 2022',
                    datearr: '4 Juni 2022',
                    timedep: '05.00 PM',
                    timearr: '08.00 PM',
                    bus: 'Bus A',
                    from: 'Yogyakarta',
                    destination: 'Semarang',
                    quantity: 1,
                    price: 50000,
                    formatted_price: '50.000',
                    total_amount: 50000,
                    formatted_total_amount: '50.000',
                    currency: 'IDR',
                    image: '/images/products/yogyakarta.jpg'
                },
            ],
            shipping: {
                price: 0,
                formatted_price: '0',
                currency: 'IDR'
            },
            subtotal: {
                amount: 50000,
                formatted_amount: '50.000',
                currency: 'IDR'
            },
            total: {
                amount: 50000,
                formatted_amount: '50.000',
                currency: 'IDR'
            }
        }
    },
    {
        country: 'Philippines',
        cart: {
            order_items: [
                {
                    name: 'Honey Badger Plushie',
                    quantity: 1,
                    price: 700,
                    formatted_price: '700',
                    total_amount: 700,
                    formatted_total_amount: '700',
                    currency: 'PHP',
                    image: '/images/products/plushie.jpg'
                },
                {
                    name: 'Xendit Mug',
                    quantity: 3,
                    price: 350,
                    formatted_price: '350',
                    total_amount: 1050,
                    formatted_total_amount: '1,050',
                    currency: 'PHP',
                    image: '/images/products/mug.jpg'
                }
            ],
            shipping: {
                price: 10,
                formatted_price: '10',
                currency: 'PHP'
            },
            subtotal: {
                amount: 1750,
                formatted_amount: '1,750',
                currency: 'PHP'
            },
            total: {
                amount: 1760,
                formatted_amount: '1,760',
                currency: 'PHP'
            }
        }
    }
];
