

function App() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>Hello world 2 </h2>
      </div>
    );
  }


  function App() {
    let name = "ram kumar"
    return (
      <div>
        <h1>my name is {name}</h1>
      </div>
    );
  }


  function App() {
    let headig  = <h1>this is simple heading one </h1>
    return (
      <div>
        {headig}
      </div>
    );
  }


  function App() {
    function fullName(firstName,lastName){
      return firstName + lastName
    }
    return (
      <div>
        <h1>My full name is  {fullName("ram", " kumar")} </h1>
      </div>
    );
  }


  function App() {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd8AbLqflPPxmgpE0jYg0D9e8ewmxbGXeQb-i62MU66IVHTgwQUkmyhmS8W3dbp8NzBU&usqp=CAU" alt="" />
      </div>
    );
  }



  function App() {
    let url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd8AbLqflPPxmgpE0jYg0D9e8ewmxbGXeQb-i62MU66IVHTgwQUkmyhmS8W3dbp8NzBU&usqp=CAU"
    return (
      <div>
        <img src={url} alt="" />
      </div>
    );
  }

  

  function App() {
    return (
      <div>
        <ol>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ol>
      </div>
    );
  }




  function App() {
    let items = ["item 1", "item 2", "item 3"]
    return (
      <div>
        <ol>
          {items.map((item,i)=>{
         return <li key = {i}> {item} </li>
          })}
        </ol>
      </div>
    );
  }
  
  
 
  function App() {
    let items = ["item 1", "item 2", "item 3"]
    let listItems = items.map((item,i)=>{
      return <li key = {i}> {item} </li>
    })
    return (
      <div>
        <ol>
          {listItems}
        </ol>
      </div>
    );
  }
  
  
  function App() {
    return (
      <div>
        <h1 style = {{color: "red"}} >styling this text here </h1>
      </div>
    );
  }
  
  
  function App() {
    let styles  = {color : "red", fontSize: "24px"}
    return (
      <div>
        <h1 style = {styles} >styling this text here </h1>
      </div>
    );
  }

  