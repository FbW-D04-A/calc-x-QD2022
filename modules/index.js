// Your code goes here!
// first import modules
import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

// modulo form
// document.selector um auf die form zu greifen im html
let moduloForm = document.getElementById("modulo-form");
// addEventListener mit "change" damit man sobald die value ändert das Event getriggert wird.
moduloForm.addEventListener("change", () => {
  //  document.selector result in variable speichern
  const result = document.getElementById("modulo_result");
  // anstatt input 1 und 2 zu definieren kann man input in ein array verwandeln und dann durch input[0]/input[1] beides ansprechen
  const input = [
    document.getElementById("modulo_1"),
    document.getElementById("modulo_2"),
  ];
  // da input ein string ist braucht man Number um das zu konvertieren und die function funktioniert
  result.value = modulo(Number(input[0].value), Number(input[1].value));
});

// percentage
let percentageForm = document.getElementById("percentage-form");

percentageForm.addEventListener("change", () => {
  const result = document.getElementById("percentage_result");
  const input = [
    document.getElementById("percentage_1"),
    document.getElementById("percentage_2"),
  ];
  result.value = percentage(Number(input[0].value), Number(input[1].value));
});

//percentageOf
let percentageOfForm = document.getElementById("percentageOf-form");

percentageOfForm.addEventListener("change", () => {
  const result = document.getElementById("percentageOf_result");
  const input = [
    document.getElementById("percentageOf_1"),
    document.getElementById("percentageOf_2"),
  ];
  result.value = percentageOf(Number(input[0].value), Number(input[1].value));
});

// difference
let differenceForm = document.getElementById("difference-form");

differenceForm.addEventListener("change", () => {
  const result = document.getElementById("difference_result");
  const input = [
    document.getElementById("difference_1"),
    document.getElementById("difference_2"),
  ];
  result.value = difference(Number(input[0].value), Number(input[1].value));
});

const aspectForm = document.getElementById("aspect-form");

aspectForm.addEventListener("change", (e) => {
  const input = [
    document.getElementById("ratio_1"),
    document.getElementById("ratio_2"),
  ];
  const newWidth = document.getElementById("ratio_result-width");
  const newHeight = document.getElementById("ratio_result-height");
  if (e.target.id === "ratio_result-height") {
    newWidth.value = calculateAspectRatio(
      Number(input[0].value),
      Number(input[1].value),
      newHeight.value,
      "h"
    );
  }
  if (e.target.id === "ratio_result-width") {
    newHeight.value = calculateAspectRatio(
      Number(input[0].value),
      Number(input[1].value),
      newWidth.value,
      "w"
    );
  }
});
