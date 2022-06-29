import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiMenu, onSushiClick, wallet}) {
  const [menuPostion, setMenu] = useState(0);
  const sushiToDisplay = sushiMenu.slice( menuPostion, menuPostion+4);
  const sushiBelt = sushiToDisplay.map(sushi => <Sushi sushi={sushi} key={sushi.id} onSushiClick={onSushiClick} wallet={wallet} />);

  function handleMore(){
    setMenu(menuPostion+4);
  }  


  return (
    <div className="belt">
      {sushiBelt}
      <MoreButton onMoreClick={handleMore} />
    </div>
  );
}

export default SushiContainer;
