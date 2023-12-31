const lastExchanges = [
    {
        orderNumber: 3320,
        orderDate: '20/01/2023',
        productClientHas: 'Pro suit XS',
        productClientNeed: 'Pro suit XXS',
        comment: 'Comment made regarding the exchange.',
        exchangeStatus: 'open',
        dateHistoric: {
            openExchange: '20/02/2023',
            sendArticle: '',
            completedExchange: '',
        },
        clientInfo: {
            pronoun: 'Madam',
            name: 'Silvia Balman',
            streetAdress: 'Dornacherstrasse',
            numberAdress: 6,
            cityAdress: 'Zurich',
            postNumberAdress: 6003,
        },
    },
    {
        orderNumber: 3350,
        orderDate: '15/02/2023',
        productClientHas: 'Pro suit XL',
        productClientNeed: 'Pro suit L',
        comment: '',
        exchangeStatus: 'send',
        dateHistoric: {
            openExchange: '15/04/2023',
            sendArticle: '20/06/2023',
            completedExchange: '',
        },
        clientInfo: {
            pronoun: 'Sir',
            name: 'Paul Müller',
            streetAdress: 'Helvetiastrasse',
            numberAdress: 23,
            cityAdress: 'Bern',
            postNumberAdress: 3005,
        },

    },
    {
        orderNumber: 3340,
        orderDate: '20/01/2023',
        productClientHas: 'Home suit M',
        productClientNeed: 'Home suit S',
        comment: '',
        exchangeStatus: 'complete',
        dateHistoric: {
            openExchange: '10/01/2023',
            sendArticle: '15/02/2023',
            completedExchange: '20/02/2023',
        },
        clientInfo: {
            pronoun: 'Madam',
            name: 'Maria Fall',
            streetAdress: 'Dornacherstrasse',
            numberAdress: 6,
            cityAdress: 'Luzern',
            postNumberAdress: 6003,
        },
    },
]

export default lastExchanges;