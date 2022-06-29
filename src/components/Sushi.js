import React, {useState} from "react";

function Sushi({sushi, onSushiClick, wallet}) {
  const {name, img_url, price} = sushi;
  const [eaten, setEaten] = useState(false)

  function purchaseSushi(){
    if (wallet < parseInt(price)){
      return null
    }
    else{
    setEaten(true);
    onSushiClick(parseInt(price));}
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={purchaseSushi}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
