
const frases = [
    "Nunca desista!",
    "Acredite em você!",
    "O sucesso exige esforço!",
    "Continue aprendendo!",
    "Cada dia é uma nova oportunidade!"
];

function gerarFrase() {
    const sorteio = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").innerText =
        frases[sorteio];
}
