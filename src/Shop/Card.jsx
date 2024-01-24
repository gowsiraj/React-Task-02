import React from 'react';
function Card({ data, clicked }) {

  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-3 mt-5 ">
      <div className="card c-01 h-100">
        <img src={data.picture} className="card-img-top h-50 img-1" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.head}</h5>
          <p className="card-text">{data.price} / 30 piecs</p>
          </div>
          {/* <button onClick={addCart;{()=>clicked(data.id)}} class="btn btn-success">{data.isclicked ? "Added" : "Add"} to Cart</button> */}
          <div className="card-footer bg-transparent border-top-0">
          <button onClick={() => { clicked(data.id); }} className="btn btn-success mb-3">
            {data.isclicked ? "Remove from" : "Add to"}  Cart
          </button>
          </div>
       
      </div>
    </div>
  );
}

export default Card;