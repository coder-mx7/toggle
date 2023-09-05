import React from "react";

const App = () => {
  const [Moh, setmoh] = React.useState(true);
  function toggle() {
    setmoh((p) => !p);
  }
  return (




<i onClick={()=>setmoh((p)=>!p)}  style={{color:Moh?'red':'',fontSize:'30px'}}  className="fa-solid fa-star"></i>



  );
};

export default App;
