let tempoPipoca = 10,
  tempoMacarrao = 8,
  tempoCarne = 15,
  tempoFeijao = 12,
  tempoBrigadeiro = 8,
  pipoca = "pipoca",
  macarrao = "macarrao",
  carne = "carne",
  feijao = "feijao",
  brigadeiro = "brigadeiro";

function aquecer(prato, tempo) {
  if ("pipoca" && tempo <= tempoPipoca) {
    console.log("tempo insuficiente");
  } else if ("pipoca" && tempo <= tempoPipoca * 2 - 1) {
    console.log("Prato concluido com sucesso");
  } else if ("pipoca" && tempo > tempoPipoca * 2 && tempo <= 29) {
    console.log("Comida queimou");
  } else if (pipoca && tempo >= tempoPipoca * 3) {
    console.log("Kabumm");
  } else if (macarrao && tempo <= tempoMacarrao * 2 - 1) {
    console.log("Prato concluido com sucesso");
  } else if (macarrao && tempo > tempoMacarrao * 2 && tempo <= 23) {
    console.log("Comida queimou");
  } else if (macarrao && tempo >= tempoMacarrao * 3) {
    console.log("Kabumm");
  } else if (carne && tempo < tempoCarne) {
    console.log("tempo insuficiente");
  } else if (carne && tempo <= tempoCarne * 2 - 1) {
    console.log("Prato concluido com sucesso");
  } else if (carne && tempo > tempoCarne * 2 && tempo <= 44) {
    console.log("Comida queimou");
  } else if (carne && tempo >= tempoCarne * 3) {
    console.log("Kabumm");
  } else if (feijao && tempo <= tempoFeijao * 2 - 1) {
    console.log("Prato concluido com sucesso");
  } else if (feijao && tempo > tempoFeijao * 2 && tempo <= 35) {
    console.log("Comida queimou");
  } else if (feijao && tempo >= tempoFeijao * 3) {
    console.log("Kabumm");
  } else if (brigadeiro && tempo <= tempoBrigadeiro * 2 - 1) {
    console.log("Prato concluido com sucesso");
  } else if (brigadeiro && tempo > tempoBrigadeiro * 2 && tempo <= 35) {
    console.log("Comida queimou");
  } else if (brigadeiro && tempo >= tempoBrigadeiro * 3) {
    console.log("Kabumm");
  } else console.log("Prato inexistente");

  console.log("Prato concluído com sucesso, bom apetite!");
}
aquecer(pipoca, 12);
