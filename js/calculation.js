document.getElementById("dipositButton").addEventListener('click',function(){
    // deposit input 
    let inputFeild=document.getElementById('dipositInput');
    let inputfeildValueString=inputFeild.value ;
    let inputfeildValue=parseFloat(inputfeildValueString);
    
    inputFeild.value='';
    // deposit board
    let depositBoard=document.getElementById('dipositValue');
    let depositBoardValueString=depositBoard.innerText;
    let depositBoardValue=parseFloat(depositBoardValueString);
    depositBoard.innerText=depositBoardValue+inputfeildValue;

    //balance board
    let balanceBoard= document.getElementById('balanceValue');
    let balanceBoardString= balanceBoard.innerText;
    let balanceBoardValue=parseFloat(balanceBoardString);
    balanceBoard.innerText= balanceBoardValue + inputfeildValue;

})

document.getElementById('withdrawButton').addEventListener('click',function(){

    // withdrawButton
    let  withdrawInputFeild = document.getElementById('withdrawInput');
    let withdrawInputFeildString = withdrawInputFeild.value;
    let withdrawInput=parseFloat(withdrawInputFeildString);
    withdrawInputFeild.value='';
    
    //balance bord
    let balanceBoard= document.getElementById('balanceValue');
    let balanceBoardString= balanceBoard.innerText;
    let balanceBoardValue=parseFloat(balanceBoardString);
    balanceBoard.innerHTML=balanceBoardValue-withdrawInput;

    //withdrawValue board
    let withdrawValueElement= document.getElementById('withdrawValue');
    let withdrawValueElementString=withdrawValueElement.innerHTML;
    let withdrawValue=parseFloat(withdrawValueElementString);
    withdrawValueElement.innerHTML=withdrawValue+withdrawInput;
})