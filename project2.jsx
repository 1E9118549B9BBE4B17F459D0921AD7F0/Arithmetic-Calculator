import { useState } from "react";

const IAPS=()=>{
    const[display,setDisplay]=useState('0');
    
  
 const click=(number)=>{
        setDisplay(display+number);
    }
const abc=()=>{
        setDisplay('');
        

    };
 const calculater=()=>{

        setDisplay(eval(display));

 }

 return(
        <div style={{cursor :'pointer', margin:'100px',display:'inline-block',
    
        height:'250x',width:'250px',}}>
    
    
            <div>
                
                <input type="text" style={{backgroundColor:'black',fontSize:'30px',color:'white',
                display:'inline-block',
                width:'225px',height:'60px',textAlignLast:'right',
                padding:'10px'}}value={display} />
             </div>
             

            <div>
                <button type="text" style={{backgroundcolor:'gray',color:'black',cursor:'pointer',
                display:'inline-block',
                width:'60px',height:'60px',
                fontSize:'20px'}}  onClick={()=>{
                click("AC");
                abc(); 
                }}>AC</button>
                <button type="text" style={{backgroundcolor:'gray',color:'black',cursor:'pointer',
                display:'inlilne-block',
                width:'61px',height:'60px',
                fontSize:'20px'}}  onClick={()=>{
                click("%");
                }}>%</button>
                <button type="text" style={{backgroundcolor:'gray',color:'black',cursor:'pointer',
                display:'inlilne-block',height:'60px',
                width:'63px',
                fontSize:'20px'}} onClick={()=>{
                click(".");
                }}>.</button>
               <button type="text" style={{backgroundColor:'orange',color:'white',cursor:'pointer',
                display:'inlilne-block',height:'60px',
                width:'63px',
               fontSize:'20px'}}onClick={()=>{
                  
                click("/");
                   }}>/</button>
            </div >
            <div>
            <button type="text" style={{backgroundcolor:'gray',color:'black',
             display:'inlilne-block',height:'60px',
             width:'60px',
            cursor:'pointer',fontSize:'20px'}} onClick={()=>{
                click("7");
            }}>7</button>
           <button type="text" style={{backgroundcolor:'gray',color:'black',height:'60px',
            display:'inlilne-block',
            width:'61px',
           cursor:'pointer',fontSize:'20px'}} onClick={()=>{
             click("8");
            }}>8</button>
            <button type="text" style={{backgroundcolor:'gray',color:'black',
             display:'inlilne-block',height:'60px',
             width:'63px',
            cursor:'pointer',fontSize:'20px'}} onClick={()=>{
                click("9");
             }}>9</button>
            <button type="text" style={{backgroundColor:'orange',color:'white',height:'60px',
             display:'inlilne-block',
             width:'63px',
            fontSize:'20px'}}onClick={()=>{
            
                click("*");
           }}>*</button>
            </div>
            <div>
            <button type="text" style={{backgroundcolor:'gray',color:'black',height:'60px',cursor:'pointer',
             display:'inlilne-block',
             width:'60px',
            fontSize:'20px'}} onClick={()=>{
                click("4");
            }}>4</button>
           <button type="text" style={{backgroundcolor:'gray',color:'black',cursor:'pointer',height:'60px',
            display:'inlilne-block',
            width:'61px',
           fontSize:'20px'}} onClick={()=>{
            click("5");
            }}>5</button>
            <button type="text" style={{backgroundcolor:'gray',color:'black',height:'60px',
             display:'inlilne-block',
             width:'63px',
            cursor:'pointer',fontSize:'20px'}} onClick={()=>{
                click("6");
            }}>6</button>
           <button type="text" style={{backgroundColor:'orange',color:'white',height:'60px',cursor:'pointer',
            display:'inlilne-block',
            width:'63px',
           fontSize:'20px'}} onClick={()=>{
            
            click("+");
          }}>+</button>

            </div>
            <div>
            <button type="text" style={{backgroundcolor:'gray',height:'60px',
             display:'inlilne-block',
             width:'60px',
            color:'black',cursor:'pointer',fontSize:'20px'}} onClick={()=>{
                click("1");
            }}>1</button>
           <button type="text" style={{backgroundcolor:'gray',color:'black',height:'60px',
            display:'inlilne-block',
            width:'61px',
           cursor:'pointer',fontSize:'20px'}} onClick={()=>{
            click("2");
            }}>2</button>
            <button type="text" style={{backgroundcolor:'gray',color:'black',
             display:'inlilne-block',height:'60px',
             width:'63px',
            cursor:'pointer',fontSize:'20px'}} onClick={()=>{
            click("3");
            
              
             }}>3</button>
           
           <button type="text"  style={{backgroundColor:'orange',color:'white',height:'60px',
           display:'inlilne-block',
           width:'63px',
           

           cursor:'pointer',fontSize:'20px'}}onClick={()=>{
            
            click("-");
         }}>-</button>
         <div>
            <div>
    
            <button type="text" style={{backgroundcolor:'gray',color:'black',height:'60px',
            display:'inlilne-block',
            width:'60px',
            cursor:'pointer',fontSize:'20px'}} onClick={()=>{
            click("0");
            
              
             }}>0</button>
              
                <button type="text" style={{backgroundcolor:'gray',
                display:'inlilne-block',height:'60px',
                width:'61px',
                color:'black',cursor:'pointer',fontSize:'20px'}} onClick={()=>{
                    click("(");
                }}>(</button>
                <button type="text" style={{backgroundcolor:'gray',height:'60px',
                display:'inlilne-block',
                width:'63px',
                color:'black',cursor:'pointer',fontSize:'20px'}} onClick={()=>{
                    click(")");
                }}>)</button>
                
                
           
           <button type="text" style={{backgroundColor:'orange',color:'white',height:'60px',
           display:'inlilne-block',
           width:'63px',height:'60px',
           cursor:'pointer',fontSize:'20px'}}onClick={()=>{
            
            calculater();
         }}>=</button>
            </div>
        
         </div>
         
         
            </div>
        </div>


     );

};
export default IAPS;