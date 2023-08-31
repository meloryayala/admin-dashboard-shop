const lastRepairs = [
    {
        orderNumber: 3530,
        orderDate: '20/01/2023',
        productToRepair: 'Pro powerbox',
        repairProblem: 'Description about the product to be repaired.',
        repairStatus: 'Open repair',
        repairType: '',
        dateHistoric: {
            openRepair: '20/02/2023',
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
        orderNumber: 3520,
        orderDate: '25/03/23',
        productToRepair: 'Home suit M',
        repairProblem: 'Description about the product to be repaired.',
        repairStatus: 'Send article',
        repairType: 'External',
        dateHistoric: {
            openRepair: '20/02/2023',
            sendArticle: '25/04/2023',
            readyToSend: '',
            sendToGermany: '',
            completedExchange: '',
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
    {
        orderNumber: 3589,
        orderDate: '10/05/2023',
        productToRepair: 'Pro suit XS',
        repairProblem: 'Description about the product to be repaired.',
        repairStatus: 'Completed',
        repairType: 'Internal',
        dateHistoric: {
            openRepair: '20/02/2023',
            sendArticle: '28/03/2023',
            completedExchange: '6/08/2023',
        },
        clientInfo: {
            pronoun: 'Sir',
            name: 'Paul Müller',
            streetAdress: 'Helvetiastrasse',
            numberAdress: 23,
            cityAdress: 'Bern',
            postNumberAdress: 3005,
        },
    }
]

export default lastRepairs;