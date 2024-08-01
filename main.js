
document.addEventListener("DOMContentLoaded", function() {
    
    function calculo(){
    
        var taxa = parseFloat(document.getElementById("taxa").value);
        var dolar = parseFloat(document.getElementById("dolar").value);
        var paraguai = parseFloat(document.getElementById("paraguai").value);
        var lucro = parseFloat(document.getElementById("lucro").value);
        
        const resultado = ( (paraguai + (paraguai * (taxa/100))) * dolar + lucro)
        return {valorFinal: resultado, lucro: lucro};
    }
    
    
    
    function res(valorFinal, lucro){
         const produto = document.getElementById("produto").value
        
        const nome = document.createElement('p')
        const custo = document.createElement('p')
        const valor = document.createElement('p')
        const formulario = document.getElementById("formulario")
        nome.textContent = "Produto: "+produto;
        custo.textContent = "Preço de custo: "+ (valorFinal - lucro).toFixed(2);
        valor.textContent= "Valor final: "+valorFinal.toFixed(2);
        
        const linha = document.createElement("hr")
        const espaco = document.createElement("br")
        formulario.appendChild(espaco)
        formulario.appendChild(nome)
        formulario.appendChild(custo)
        formulario.appendChild(valor)
        formulario.appendChild(linha)
        
       
    }
    
    
    
    
    document.body.addEventListener("click", function(e) {
        e.preventDefault()
        const el = e.target
        if(el.classList.contains("botao")){
            const resultado = calculo()
            res(resultado.valorFinal, resultado.lucro)
        }
        
        
        
        
        
        
    });
});



