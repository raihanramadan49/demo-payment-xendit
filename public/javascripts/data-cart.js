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
                    name: 'Kaos UGM v2',
                    quantity: 1,
                    price: 90000,
                    formatted_price: '90.000',
                    total_amount: 90000,
                    formatted_total_amount: '90.000',
                    currency: 'IDR',
                    image: '/images/products/kaosugm.png'
                },
                {
                    name: 'Kaos Algoritma TI',
                    quantity: 2,
                    price: 100000,
                    formatted_price: '100.000',
                    total_amount: 200000,
                    formatted_total_amount: '200.000',
                    currency: 'IDR',
                    image: '/images/products/kaosalgo.png'
                },
                {
                    name: 'Gantungan TETI',
                    quantity: 3,
                    price: 9000,
                    formatted_price: '9.000',
                    total_amount: 27000,
                    formatted_total_amount: '27.000',
                    currency: 'IDR',
                    image: '/images/products/ganci.png'
                },
            ],
            shipping: {
                price: 5000,
                formatted_price: '5.000',
                currency: 'IDR'
            },
            subtotal: {
                amount: 317000,
                formatted_amount: '317.000',
                currency: 'IDR'
            },
            total: {
                amount: 322000,
                formatted_amount: '322.000',
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
