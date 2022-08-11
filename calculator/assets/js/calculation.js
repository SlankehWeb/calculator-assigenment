function calc()
{
    let field1 = parseFloat(document.getElementById('field1').value);
    let field2 = parseFloat(document.getElementById('field2').value);
    
    let calcu = document.getElementById('calculators').value;
    
    if(calcu === '+')
    {
        document.getElementById('result').value = field1+field2;
    }
    
    if(calcu === '-')
    {
        document.getElementById('result').value = field1-field2;
    }
    
    if(calcu === '/')
    {
        document.getElementById('result').value = field1/field2;
    }
    
    if(calcu === 'X')
    {
        document.getElementById('result').value = field1*field2;
    }
    console.log(result. value)
}

let ntError = document.getElementById('nt-error');
function validateNumber(){
    let nt = document.getElementById('field1').value;
    if(!nt.match(/[0-9]$/)){
        ntError.innerHTML = 'numbers only';
        return false;
    }

}
let nfError = document.getElementById('nf-error');
function validateNumbers(){
let nf = document.getElementById('field2').value;
if(!nf.match(/[0-9]$/)){
    nfError.innerHTML = 'numbers only';
    return false;
}
}
