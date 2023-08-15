
export const lastOrders = [
    {
        orderInfo: {
            number: 3310,
            orderDate: '15/08/2023',
            products: [
                'Pro suit XS',
                'Pro powerbox',
            ],
            paymentMethod: {
                type: 'Credit card',
                parcels: 1,
            },
            clientComment: '',
            orderStatus: 'Pending',
            sendDate: '-',
        },
        clientInfo: {
            pronoun: 'Sir',
            name: 'Paul Müller',
            adress: {
                street: 'Höschgasse',
                houseNumber: 70,
                city: 'Zurich',
                postNumber: 8008,
            },
        },

    },
    {
        orderInfo: {
            number: 3311,
            date: '16/08/2023',
            products: [
                'Home suit XL',
            ],
            paymentMethod: {
                type: 'Credit card',
                parcels: 2,
            },
            clientComment: '',
            orderStatus: 'Completed',
            sendDate: '18/08/2023'
        },
        clientInfo: {
            pronoun: 'Madam',
            name: 'Livia Lopez',
            adress: {
                street: 'Dornacherstrasse',
                houseNumber: 6,
                city: 'Luzern',
                postNumber: 6003,
            },
        },

    },

]

