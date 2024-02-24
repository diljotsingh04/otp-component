
const PhonePage = (props) => {

  return (
    <>
      <div>
        <h1>Enter your Phone Number</h1>
        <input type="text" onChange={(e) => props.setphoneNo(e.target.value)} value={props.phoneNo} /> <br />
        <button onClick={props.handleClick}>Submit</button>
      </div>
    </>
  )
}

export default PhonePage;
