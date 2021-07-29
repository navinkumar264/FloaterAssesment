
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
function App() {


  const [loan_amt, setloan_amt] = useState()
  const [months, setmonths] = useState()
  const [intrest_rate, setintrest_rate] = useState()
  const [emi, setemi] = useState()
  const [flag, setflag] = useState("true")
  const [intrest, setintrest] = useState()
  const [totalpay, settotalpay] = useState()


  let calc = (e) => {
    var calemi = Math.ceil(loan_amt * (intrest_rate / (12 * 100)) * (Math.pow(1 + (intrest_rate / (12 * 100)), months)) / (Math.pow(1 + (intrest_rate / (12 * 100)), months) - 1))
    setemi(eval(Math.round(loan_amt * (intrest_rate / (12 * 100)) * (Math.pow(1 + (intrest_rate / (12 * 100)), months)) / (Math.pow(1 + (intrest_rate / (12 * 100)), months) - 1))))
    settotalpay(eval(calemi * months))
    var p = calemi * months
    setintrest(eval(p - loan_amt))
    setflag("false")
    console.log(flag);
  }

  let reset = (e) => {

    setflag("true")
    setintrest_rate()
    setloan_amt()
    setmonths()
    console.log(flag);
  }



  return (
    <div className="App">

      <h1>Loan EMI Calculator</h1>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Enter Loan Amount" variant="outlined" value={loan_amt} onChange={(e) => setloan_amt(e.target.value)} /><span>   Rupees</span><br /><br />
        <TextField id="Loan Tensure" label="Loan Tensure" variant="outlined" value={months} onChange={(e) => setmonths(e.target.value)} /><span>Months</span><br /><br />
        <TextField id="Intrest Rate" label="Intest Rate" variant="outlined" value={intrest_rate} onChange={(e) => setintrest_rate(e.target.value)} /><span>Percent</span><br /><br />

        {flag == "false" ? <Button variant="contained" color="primary" disableElevation onClick={reset}>  Reset</Button> : <Button variant="contained" color="primary" disableElevation onClick={calc}>  Calculate</Button>}
        {/* <Button variant="contained" color="primary" disableElevation  onClick={calc}>  Calculate</Button> */}
      </form><br /><br />
      {flag === "false" ? <TextField id="outlined-basic" label="Loan EMI" variant="outlined" value={emi} /> : ""}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" value={emi}/> */}
      {flag === "false" ? <TextField id="outlined-basic" label="Total Payable Intrest" variant="outlined" value={totalpay} /> : ""}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" value={emi}/> */}<br /><br />
      {flag === "false" ? <TextField id="outlined-basic" label="Intrest Payable" variant="outlined" value={intrest} /> : "Not Logged IN"}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" value={emi}/> */}
    </div>
  );
}

export default App;
