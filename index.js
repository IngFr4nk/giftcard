let array_compra = [];
document.querySelector("#btn_add").addEventListener("click", function() {
  if (
    document.getElementById("price").value === "" ||
    document.getElementById("count").value === ""
  ) {
    alert("Debe llenar los campos requeridos de valor y cantidad!");
    return;
  }
  let cl = document.getElementById("clase");
  let tp = document.getElementById("tipo");
  let price = parseInt(document.getElementById("price").value);
  let qt = parseInt(document.getElementById("count").value);
  let ml = price * qt;
  let d = new Date();
  let jn = {
    id: d.getTime(),
    clase: cl.options[cl.selectedIndex].value,
    tipo: tp.options[tp.selectedIndex].value,
    precio: price,
    cantidad: qt,
    total: ml
  };

  function htmlString(item) {
    let dom = document.createElement("div");
    dom.innerHTML = `
            
              <p>${item.clase} ${item.tipo} - Valor: $${
      item.precio
    } - Cantidad: ${item.cantidad}.......... $${item.total}</p>
            
          `;
    document.getElementById("content-add").appendChild(dom);
    document.getElementById("price").value = "";
    document.getElementById("count").value = "";
  }

  let content = document.querySelector(".content-add");
  array_compra.push(jn);
  content.innerHTML = "";
  console.log(array_compra);
  array_compra.map(function(item) {
    return htmlString(item);
  });
});
