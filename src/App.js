import './App.css';
import Order from "./components/Order"
function App() {

  const orders = [{
    "name": "Daves Hot Chicken",
    "review": "8.5"
  },
  {
    "name": "adfad",
    "review": "8.5"
  },
  {
    "name": "Dsdfdasdf",
    "review": " "
  }]
  return (
    <div className= "header">
  <h1> Brook and Ethan's UberEats Review Guide </h1>
  <h3> Since we've gotten to Rice University </h3>
  


<div className = 'body'>
{orders.map(order => 
<Order name = {order.name} review= {order.review} />
  )}

</div>


 
    </div>
  );
}

export default App;
