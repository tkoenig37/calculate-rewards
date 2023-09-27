import { useState, useEffect} from "react";
import { customers, months } from "../api/Data";
import { fetchData} from "../api/Data";


function PointsEarned(cost) {
    if( 50 < cost && cost < 100) {
        return Math.floor(cost - 50);
    } else if(cost > 100) {
        return (Math.floor(cost - 100) * 2) + 50;
    }

    return 0;
}

function Calculate(data) {
    let calculatedData = {}
    let firstMonth = null;

    // Find the first month
    data.forEach((item) => {
        if(item.date < firstMonth || firstMonth === null) {
            firstMonth = item.date.getMonth();
        }
if(calculatedData.hasOwnProperty(item.date.getMonth())){
    calculatedData = { ...calculatedData, [item.date.getMonth()]: PointsEarned(item.charge) + calculatedData[item.date.getMonth()]}
} else {
    Object.assign(calculatedData, {[item.date.getMonth()]: PointsEarned(item.charge)})
}
    })

    return calculatedData;
}

function CalculateRewards() {

    const [customer, setCustomer] = useState(customers[0])
    const [customerTransactions, setCustomerTransactions] = useState([])
    const [calculatedData, setCalculatedData] = useState({})


    useEffect(() => {
        if(customerTransactions.length > 0) {
            setCalculatedData(Calculate(customerTransactions))
        }
    }, [customerTransactions])

    return (
        <div className="App">
            <select value={customer.id} onChange={(event) => setCustomer(customers.find((c) => c.id === parseInt(event.target.value)))}>
                {customers.map((item) => <option value={item.id} key={item.id}>{item.first.concat(' ', item.last)}</option> )}
            </select>
            <button onClick={() => fetchData(customer.id).then((x) => setCustomerTransactions(x))}>Calculate Rewards</button>
            {Object.keys(calculatedData).length !== 0 && <div>
                <div>{`${customer.first} ${customer.last} Rewards`}</div>
                    {Object.keys(calculatedData).map((month) => <div key={month}>{`${months[month]}: ${calculatedData[month]}\n`}</div>)}
                <div>{`Total Points: ${Object.values(calculatedData).reduce((a, b) => a+b)}`}</div>
            </div>}
        </div>
    );
}

export default CalculateRewards;
