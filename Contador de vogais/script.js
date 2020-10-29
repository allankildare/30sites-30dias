document.getElementById("resultado").addEventListener('click', texto => {
    texto = document.getElementById("texto").value // pega texto do input

    // array com variadas formas de escrever as vogais
    var vogais = 
    ['a', 'e', 'i', 'o', 'u', 
    'A', 'E', 'I', 'O', 'U',
    'á', 'é', 'í', 'ó', 'ú', 
    'Á', 'É', 'Í', 'Ó', 'Ú',
    'à','è','ì','ò','ù',
    'À','È','Ì','Ò','Ù',
    'â','ê','î','ô','û',
    'Â','Ê','Î','Ô','Û',
    'ã','õ','Ã','Õ']
    
    var totalVogais = 0

    for (i = 0; i < texto.length; i++ ) {
        if(vogais.indexOf(texto[i]) != -1) {
            totalVogais++;
        }
    }

    var tela = document.getElementById("display")
    tela.textContent = totalVogais
})