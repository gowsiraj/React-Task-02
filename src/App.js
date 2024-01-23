
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Shop/Navbar';
import Header from './Shop/Header';
import Main from './Shop/Main';
import Card from './Shop/Card';
import Footer from './Shop/Footer';
import { useState } from 'react';



function App() {
  let cardlist = [{
    id: "01",
    head: "Wedding-Gift Paper Bag",
    capacitiy: "1.5 kg",
    price: "1033",
    picture: "./image/weddingbag.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "02",
    head: "Plain Jute Gift Bags",
    capacitiy: "1 kg",
    price: "540",
    picture: "./image/plainjutebag.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "03",
    head: "Loop handle Paper Bag",
    capacitiy: "1.5 kg",
    price: "750",
    picture: "./image/loophandlebag.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "04",
    head: "Luxury Paper Bag",
    capacitiy: "3 kg",
    price: "450",
    picture: "./image/luxurybag.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "05",
    head: "Printed Paper Bag",
    capacitiy: "1 kg",
    price: "1500",
    picture: "./image/printedbag.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "06",
    head: "Brown Plain Paper Bag",
    capacitiy: "500 gm",
    price: "150",
    picture: "./image/plainpaperbag.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "07",
    head: "Kraft Paper Pouches",
    capacitiy: "500 gm",
    price: "210",
    picture: "./image/paperpouch.webp",
    text: "Add",
    isclicked: false,
  },
  {
    id: "08",
    head: "Paper Food Packing Bag",
    capacitiy: "500 gm",
    price: "108",
    picture: "./image/paperbag1.webp",
    text: "Add",
    isclicked: false,
  },
  ]
  let [cart, setcart] = useState(0);
  let [card, setCard] = useState(cardlist);
  let clicked = (id) => {
    let buttonindex = card.findIndex((btn) => btn.id === id);
    card[buttonindex].isclicked = !card[buttonindex].isclicked;

    if (card[buttonindex].isclicked) {
      setcart(cart + 1);
    } else {
      setcart(cart - 1);
    }
    setCard([...card]);
  }


  return (
    <div>
      <Navbar cart={cart}></Navbar>
      <div class="container text-center ">
        <Header></Header>
      </div>
      <div className='mt-5 p-5' style={{ backgroundColor: "#2b8a3e" }}>
        <div class="container text-center">
          <Main></Main>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          {
            card.map((card) => {
              return <Card data={card} clicked={clicked} />;
            })
          }
        </div>
      </div>
      <div style={{ backgroundColor: "#ebfbee" }} className='p-5 mt-5'>
        <div class="container text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
