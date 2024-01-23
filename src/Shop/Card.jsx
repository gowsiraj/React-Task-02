import React from 'react';
function Card({ data, clicked }) {

  return (
    <div class="col-3 mt-5" >
      <div class="card c-01">
        <img src={data.picture} class="card-img-top img-1" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{data.head}</h5>
          <p class="card-text">RS: {data.price} / 30 piecs</p>
          {/* <button onClick={addCart;{()=>clicked(data.id)}} class="btn btn-success">{data.isclicked ? "Added" : "Add"} to Cart</button> */}
          <button onClick={() => { clicked(data.id); }} className="btn btn-success">
            {data.isclicked ? "Remove from" : "Add to"}  Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
