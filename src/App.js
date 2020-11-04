import './App.css';
import {useState,useEffect} from 'react';
import cake from './files/cake.gif';
import party from './files/garlands.png'
import timer from './files/stopwatch.png'
import hearts from './files/hearts.png';
import heart_name from './files/heart_name.png'
import {BsFillHeartFill} from 'react-icons/bs';

function BalloonSVG({colorSelected})
{
  return (
    <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
      <path style={{fill:"rgb(171 171 171)"}} d="M245.333,512c-5.891,0-10.667-4.776-10.667-10.667c0.69-10.543,4.675-20.602,11.392-28.757
        c5.876-6.907,9.363-15.527,9.941-24.576c0-7.808-9.771-14.933-19.2-21.973c-11.541-8.533-23.467-17.301-23.467-31.36
        c0.849-11.946,5.95-23.193,14.379-31.701c3.093-3.84,6.955-8.533,6.955-10.965c0-5.891,4.776-10.667,10.667-10.667
        c5.891,0,10.667,4.776,10.667,10.667c-0.951,9.232-5.084,17.845-11.691,24.363c-5.123,4.888-8.509,11.315-9.643,18.304
        c0,3.285,8.896,9.856,14.763,14.187c12.437,9.173,27.904,20.565,27.904,39.147c-0.491,13.328-5.264,26.142-13.611,36.544
        c-4.169,4.715-6.856,10.555-7.723,16.789C256,507.224,251.224,512,245.333,512z"/>
      <path style={{fill:colorSelected}} d="M295.552,344.448l-32-32c-4.165-4.164-10.917-4.164-15.083,0l-32,32
        c-4.171,4.16-4.179,10.914-0.019,15.085c2.001,2.006,4.717,3.133,7.55,3.134h64c5.891,0.011,10.675-4.757,10.686-10.648
        C298.691,349.179,297.563,346.454,295.552,344.448z"/>
      <path style={{fill:colorSelected}} d="M256,0c-82.436,0.094-149.239,66.898-149.333,149.333c0,84.075,90.368,181.333,149.333,181.333
        s149.333-97.259,149.333-181.333C405.239,66.898,338.436,0.094,256,0z"/>
    </svg>
  )
}


function RenderBalloon(props)
{
  const colors = ["lightsalmon","rgb(253 253 110)","lightblue","lightgoldenrodyellow","lightgreen","lightpink","lightseagreen","lightsteelblue"];
  let colorSelected = colors[props.color];
  let layout = props.layout === "top"? "image-stack_item_top_g"+props.gridRow:"image-stack_item_bottom_g"+props.gridRow;
  return (
    <div className={layout} style={{gridColumn: props.gridColumn}}>
      <BalloonSVG colorSelected={colorSelected}/>
    </div>
  )
}



function App() {
  const [counter,setCounter]=useState(+new Date('10/29/2020') - +new Date());
  const [balloonArray_row1,setBalloonArray]=useState([
    {id:1, layout:"top",gridColumn:"1/4",color:0},
    {id:2, layout:"bottom",gridColumn:"2/5",color:1},
    {id:3, layout:"top",gridColumn:"3/6",color:2},
    {id:4, layout:"bottom",gridColumn:"4/7",color:3},
    {id:5, layout:"top",gridColumn:"5/8",color:4},
    {id:6, layout:"bottom",gridColumn:"6/9",color:5},
    {id:7, layout:"top",gridColumn:"7/10",color:6},
    {id:8, layout:"bottom",gridColumn:"8/11",color:7},
    {id:9, layout:"top",gridColumn:"9/12",color:0},
    {id:10, layout:"bottom",gridColumn:"10/-1",color:1}
  ]);
  const [balloonArray_row2,setBalloonArray2]=useState([
    {id:1, layout:"top",gridColumn:"1/4",color:0},
    {id:2, layout:"bottom",gridColumn:"2/5",color:1},
    {id:3, layout:"top",gridColumn:"3/6",color:2},
    {id:4, layout:"bottom",gridColumn:"4/7",color:3},
    {id:5, layout:"top",gridColumn:"5/8",color:4},
    {id:6, layout:"bottom",gridColumn:"6/9",color:5},
    {id:7, layout:"top",gridColumn:"7/10",color:6},
    {id:8, layout:"bottom",gridColumn:"8/11",color:7},
    {id:9, layout:"top",gridColumn:"9/12",color:0},
    {id:10, layout:"bottom",gridColumn:"10/-1",color:1}
  ]);
  const [balloonArray_row3,setBalloonArray3]=useState([
    {id:1, layout:"top",gridColumn:"1/4",color:0},
    {id:2, layout:"bottom",gridColumn:"2/5",color:1},
    {id:3, layout:"top",gridColumn:"3/6",color:2},
    {id:4, layout:"bottom",gridColumn:"4/7",color:3},
    {id:5, layout:"top",gridColumn:"5/8",color:4},
    {id:6, layout:"bottom",gridColumn:"6/9",color:5},
    {id:7, layout:"top",gridColumn:"7/10",color:6},
    {id:8, layout:"bottom",gridColumn:"8/11",color:7},
    {id:9, layout:"top",gridColumn:"9/12",color:0},
    {id:10, layout:"bottom",gridColumn:"10/-1",color:1}
  ]);
  
  
  useEffect(()=>{
    setTimeout(() => {
      setCounter(+new Date('12/05/2020') - +new Date());
    }, 1000);
    return () => clearTimeout(counter);
  })

  return (
    <div className="container" style={{marginTop:"1%",marginBottom:"1%",border:"groove",borderColor:"burlywood"}}>
      <div className="row" style={{justifyContent :"center"}}>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
            <img src={party} style={{height:"50px"}}/>
          </div>
      <div className="row" style={{paddingTop:"1%",paddingBottom:"1%",margin:"1%"}}>
        <div className="col-5" style={{padding:"1%",paddingRight:"2%",paddingTop:"5%",background:""}}>
          <div className="row" style={{justifyContent :"center"}}>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
          </div>
          <div className="row" style={{justifyContent :"center"}}>
            <h1 className="Header-text">Happy Birthday Rucha !! 
            <img src={heart_name} style={{height:"50px"}}/></h1>
          </div>
          <div className="row" style={{justifyContent :"center",padding:"1%"}}>
            <img src={cake} style={{height:"70%",width:"70%",objectFit:"contain"}}/>
          </div>
          <div className="row" style={{justifyContent :"center"}}>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
            <img src={hearts} style={{height:"50px"}}/>
          </div>
        </div>
        <div className="col-7">
            <div className="image-stack">
              {balloonArray_row1.map((item)=>
              <RenderBalloon layout={item.layout} gridColumn={item.gridColumn} key={item.id} gridRow="1" color={item.color}/>
              )}
              {balloonArray_row2.map((item)=>
                <RenderBalloon layout={item.layout} gridColumn={item.gridColumn} key={item.id} gridRow="2" color={item.color}/>
              )}
              {balloonArray_row3.map((item)=>
                <RenderBalloon layout={item.layout} gridColumn={item.gridColumn} key={item.id} gridRow="3" color={item.color}/>
              )}
          </div>
          <div className="row" style={{padding:"1%",paddingTop:"3%",justifyContent :"center",margin:"1%",marginTop:"3%",background:""}}>
            <h1 className="Countdown-text"><img src={timer} /> Birthday CountDown: </h1>
            <br></br>
            <h3 className="SubHeader-text">
              {Math.floor(counter / (1000 * 60 * 60 * 24))} days {Math.floor((counter / (1000 * 60 * 60)) % 24)} hours {Math.floor((counter / 1000 / 60) % 60)} minutes {Math.floor((counter / 1000) % 60)} seconds
            </h3>
          </div>
        </div>
      </div>
      <footer style={{textAlign:"center",paddingBottom:"1%"}}><button type="button" className="btn btn-dark" style={{background:"burlywood", border:"burlywood"}}> Created with <BsFillHeartFill color="red"/> For Rucha Pagar <br></br> By Ankit Jayaswal </button></footer>
    </div>
  );
}

export default App;
