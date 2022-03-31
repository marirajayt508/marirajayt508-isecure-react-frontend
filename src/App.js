import Flow from "./components/Flow";
function App(){  
  const dedect = () => {
    console.log(navigator.userAgent.toLocaleLowerCase())
       if((navigator.userAgent.toLocaleLowerCase().search("windows") == -1) || ((navigator.userAgent.toLocaleLowerCase().search("linux") == -1) && (navigator.userAgent.toLocaleLowerCase().search("android") != -1)) || (navigator.userAgent.toLocaleLowerCase().search("ios") != -1) )
       {
        return <div>
             <center>This is Desktop website..</center>
           </div>
       }
       else
       {
        return <div><Flow/></div>
       }
       
  }
return (
    <div className="App">
      {dedect()}
     </div> 
  );
}

export default App;
