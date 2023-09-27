export const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}



export const customers = [{ id: 1, first: 'Taylor', last: 'Smith'},
    { id: 2, first: 'Tho', last: 'Johnson'},
    { id: 3, first: 'Ben', last: 'Star'},
    { id: 4, first: 'Adam', last: 'Perez'}];

export const transactions = [
    { id: 1, date: new Date(2023, 1, 1), customerId: 1, charge: 157.87},
    { id: 2, date: new Date(2023, 1, 1), customerId: 1, charge: 94.32},
    { id: 3, date: new Date(2023, 2, 1), customerId: 1, charge: 47.30},
    { id: 4, date: new Date(2023, 2, 1), customerId: 1, charge: 375.22},
    { id: 5, date: new Date(2023, 3, 1), customerId: 1, charge: 79.34},
    { id: 6, date: new Date(2023, 3, 1), customerId: 1, charge: 504.34},
    { id: 7, date: new Date(2023, 1, 1), customerId: 2, charge: 127.87},
    { id: 8, date: new Date(2023, 1, 1), customerId: 2, charge: 74.32},
    { id: 9, date: new Date(2023, 2, 1), customerId: 2, charge: 107.30},
    { id: 10, date: new Date(2023, 2, 1), customerId: 2, charge: 375.22},
    { id: 11, date: new Date(2023, 3, 1), customerId: 2, charge: 479.34},
    { id: 12, date: new Date(2023, 3, 1), customerId: 2, charge: 1504.34},
    { id: 13, date: new Date(2023, 1, 1), customerId: 3, charge: 1127.87},
    { id: 14, date: new Date(2023, 1, 1), customerId: 3, charge: 34.32},
    { id: 15, date: new Date(2023, 2, 1), customerId: 3, charge: 127.30},
    { id: 16, date: new Date(2023, 2, 1), customerId: 3, charge: 35.22},
    { id: 17, date: new Date(2023, 3, 1), customerId: 3, charge: 289.34},
    { id: 18, date: new Date(2023, 3, 1), customerId: 3, charge: 2504.34},
    { id: 19, date: new Date(2023, 1, 1), customerId: 4, charge: 1127.87},
    { id: 20, date: new Date(2023, 1, 1), customerId: 4, charge: 134.32},
    { id: 21, date: new Date(2023, 2, 1), customerId: 4, charge: 407.30},
    { id: 22, date: new Date(2023, 2, 1), customerId: 4, charge: 354.22},
    { id: 23, date: new Date(2023, 3, 1), customerId: 4, charge: 25.34},
    { id: 24, date: new Date(2023, 3, 1), customerId: 4, charge: 2104.34},
];



export async function fetchData(customerId){
    // Delay to simulate fetching data
        await new Promise(resolve => setTimeout(resolve, 1500));
    return transactions.filter((t) => t.customerId === customerId)

}