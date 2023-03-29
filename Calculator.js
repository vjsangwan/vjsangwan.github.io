let buttonPressed=[]
let numberPressed=[]
let mathFunctionPressed='';
let result = 0;

document.querySelectorAll('button').forEach(function(button){
    button.onclick=function(){
        let inputObj=this.dataset;
        let inputKey = Object.keys(inputObj)[0];
        if(inputKey==='number' || inputKey==='operation') {
            buttonPressed.push(inputObj[inputKey]);
        }
       if(inputKey==='number'){ 
           numberPressed.push(inputObj[inputKey]);
            } else if (inputKey==='operation'){
                    mathFunctionPressed=inputObj[inputKey];
                }
                
            }
    
        }
    )
    const equalButton=document.querySelector('[data-equals]');
    equalButton.addEventListener("click", function(e){
        if(mathFunctionPressed==='Add'){
        result = Add();
        }
        else if(mathFunctionPressed==='Sub'){
            result = Substraction();
        }
        else if(mathFunctionPressed==='Multiply'){
        result = Multiply();
        }
        else if(mathFunctionPressed==='Divide') {
            result = Division();
        }

       const CalOutput=document.querySelector(".CalOutput");
       CalOutput.innerHTML=result;
       numberPressed = [result];
    });



    function Add(){
       return parseFloat(numberPressed[0])+parseFloat(numberPressed[1]);
    }
    function Substraction(){
        
       return Subs= parseFloat(numberPressed[0])-parseFloat(numberPressed[1]);
    }
    function Multiply(){
       return parseFloat(numberPressed[0])*parseFloat(numberPressed[1]);

    }
    function Division(){
       return parseFloat(numberPressed[0])/parseFloat(numberPressed[1]);
    }
    


    const deleteButton=document.querySelector('[data-delete]');
    deleteButton.addEventListener("click", function(e){
        const CalOutput=document.querySelector(".CalOutput");
        CalOutput.innerHTML=0;
        numberPressed = [];
        })