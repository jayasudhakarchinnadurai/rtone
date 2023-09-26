
function Data(props){
    return(
   
      <div className='table'>
      <p className='center'>{props.Name}</p>
      <div className='data'>
       <h1 className='dollar'>{props.amt}/{props.date}</h1>
      
       </div>
       <p className='vi'></p>
      <ul className='no-bullets'>
        <li style={{ fontWeight:props.opacitys }} className='move'>
          <span className='Tick'>{props.Tick}</span>
          {` ${props.user}`}
        </li><br></br>
        <li className='move'>
          <span className='Tick'>{props.Tick}</span>
          {` ${props.storage}`}
        </li><br></br>
        <li className='move'>
          <span className='Tick'>{props.Tick}</span>
          {` ${props.publicstorage}`}
        </li><br></br>
        <li className='move'>
   
       <span className='Tick'>{props.Tick}</span>
          {` ${props.access}`}
        </li><br></br>
        <li  style={{ opacity:props.name }} className='move'>
          <span className='Tick'>{props.tick}</span>
          {` ${props.PrivateProjects}`}
        </li><br></br>
        <li style={{ opacity:props.name }} className='move'>
          <span className='Tick'>{props.tick}</span>
          {` ${props.phone}`}
        </li><br></br>
        <li style={{ opacity:props.name }} className='move'>
          <span className='Tick'>{props.tick}</span>
          {` ${props.domain}`}
          </li><br></br>
          <li style={{ opacity:props.size}}className='move'>
          <span className='Tick'>{props.value}</span>
          {` ${props.reports}`}
        </li><br></br>
      </ul><br></br><br></br>
    <button className='button'>BUTTON</button>
      </div>
      
    )
  }
  export default Data;