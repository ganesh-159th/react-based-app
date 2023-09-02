import React ,{useState} from 'react'


export default function Textform(props) {

  const uppercase =()=>{
    console.log("\n the upper button has been clicked  "+text);
    let newtext = text.toUpperCase();
    settext(newtext);

  }
  const lowercase =()=>{
    console.log("\n the lower case button has been clicke "+text);
    let newtext =text.toLowerCase();
    settext(newtext);



  }
  const reverseString = () => {
    var str = text;
    console.log("\n this one  reversing the text "+text)
    settext(str.split('').reverse().join(''));
    

  };
  const Original = () => {
    var str = text;
    console.log("\n this normal  the text "+text)
    settext(str.split('').reverse().join(''));
    

  };
 
  const clear =()=>{
    console.log("\n the text has been cleared "+text);
    let newtext = " ";
    settext(newtext);
  

  }
  
  const onchange =(event)=>{
    console.log("on change");
   settext(event.target.value);
   
  }
  
    const[text, settext] =useState('Enter text here');
    
  return (
  
    <>
    
    <div className="mb-3 ">
    <h1>{props.heading}</h1>
        
       <textarea className="form-control" id="myBox" rows="8" value ={text} onChange={onchange} placeholder='Enter the text here '></textarea>
       <button className="btn btn-primary my-2" onClick={uppercase}> Convert to uppercase</button>
       <button className="btn btn-primary my-2 mx-2"onClick={lowercase}>Convert to lower case</button>
       <button className="btn btn-primary my-2 mx-2"onClick={clear}>  Clear </button>
       <button className="btn btn-primary my-2 mx-2"onClick={reverseString}>  reverse </button>
       <button className="btn btn-primary my-2 mx-2"onClick={Original}>  Convert to Original  </button>


       <div className="container my-3">
        <h1> your text summary </h1>
        <p>{text.split(" ").length}words and {text.length} charecters </p>
        <p>{ 0.008 *(text.split("").length)} minutes to read a word</p>

        <h1> preview of the text that you have entered </h1>
        <p>{text}</p>
       </div>



     </div>
    </>
   
  )
}
