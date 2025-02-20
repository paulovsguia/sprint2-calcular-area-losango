document.addEventListener(function() {
    document.getElementById("calcularBtn").addEventListener("click", calcularArea);
});

function calcularArea() {
    let D = parseFloat(document.getElementById("diagonalMaior").value);
    let d = parseFloat(document.getElementById("diagonalMenor").value);

    if (isNaN(D) || isNaN(d) || D <= 0 || d <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos!";
        return;
    }

    let area = (D * d) / 2;
    document.getElementById("resultado").innerText = `Área do losango: ${area}`;
}