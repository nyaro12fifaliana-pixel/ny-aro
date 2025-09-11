//gestion d'onglet
function afficher(id) {
    document.querySelectorAll(".contenue").forEach(div => {
        div.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}
//prtie cramer
function multiplivation(a,b){
    return a*b;
}

function addition(a,b){
    return a+b;
}

function soustraction(a,b){
    return a-b;
}

function determinant(m) {
    const [[a, b, c], [d, e, f], [g, h, i]] = m;
    let ei = multiplivation(e,i);
    let fh = multiplivation(f,h);
    let di = multiplivation(d,i);
    let fg = multiplivation(f,g);
    let dh = multiplivation(d,h);
    let eg = multiplivation(e,g);
    let aa = soustraction(ei,fh);
    let bb = soustraction(di,fg);
    let cc = soustraction(dh,eg);
    aa = multiplivation(a,aa);
    bb = multiplivation(b,bb);
    cc = multiplivation(c,cc);
    aa = soustraction(aa,bb);
    aa = addition(aa,cc);
    return aa;

    }

function resoudre() {
    const a1 = Number(document.getElementById("a1").value);
    const a2 = Number(document.getElementById("a2").value);
    const a3 = Number(document.getElementById("a3").value);
    const b1 = Number(document.getElementById("b1").value);
    const b2 = Number(document.getElementById("b2").value);
    const b3 = Number(document.getElementById("b3").value);
    const c1 = Number(document.getElementById("c1").value);
    const c2 = Number(document.getElementById("c2").value);
    const c3 = Number(document.getElementById("c3").value);
    const d1 = Number(document.getElementById("d1").value);
    const d2 = Number(document.getElementById("d2").value);
    const d3 = Number(document.getElementById("d3").value);

    const matrice = [[a1, b1, c1], [a2, b2, c2], [a3, b3, c3]];
    const matrice_x = [[d1, b1, c1], [d2, b2, c2], [d3, b3, c3]];
    const matrice_y = [[a1, d1, c1], [a2, d2, c2], [a3, d3, c3]];
    const matrice_z = [[a1, b1, d1], [a2, b2, d2], [a3, b3, d3]];

    const det = determinant(matrice);
    const det_x = determinant(matrice_x);
    const det_y = determinant(matrice_y);
    const det_z = determinant(matrice_z);

    const reponses = document.getElementById("reponses");

    if (det === 0 && det_x != 0) {
        reponses.innerHTML = `
            <p>Matrices utilisées :</p>
            <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center;">
                <div>
                    <p>A :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${b1}</td><td>${c1}</td></tr>
                        <tr><td>${a2}</td><td>${b2}</td><td>${c2}</td></tr>
                        <tr><td>${a3}</td><td>${b3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_A = Δ = ${det}</p>
                </div>
                <div>
                    <p>X :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${d1}</td><td>${b1}</td><td>${c1}</td></tr>
                        <tr><td>${d2}</td><td>${b2}</td><td>${c2}</td></tr>
                        <tr><td>${d3}</td><td>${b3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_x = Δx = ${det_x}</p>
                </div>
                <div>
                    <p>Y :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${d1}</td><td>${c1}</td></tr>
                        <tr><td>${a2}</td><td>${d2}</td><td>${c2}</td></tr>
                        <tr><td>${a3}</td><td>${d3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_y = Δy = ${det_y}</p>
                </div>
                <div>
                    <p>Z :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${b1}</td><td>${d1}</td></tr>
                        <tr><td>${a2}</td><td>${b2}</td><td>${d2}</td></tr>
                        <tr><td>${a3}</td><td>${b3}</td><td>${d3}</td></tr>
                    </table><br>
                    <p>det_z = Δz = ${det_z}</p>
                </div>
                <div style="color: black; border: 2px solid red; padding: 10px; background-color: #ffe5e5; text-align: center; min-width: 250px;">
                    <p><strong>Δ = 0</strong></p>
                    <p><strong>Aucune solution aproprier</strong> <i class="fas fa-ban" style="color: red;"></i></p>
                </div>
            </div>
        `;
    } 
    else if(det != 0) {
        const x = det_x / det;
        const y = det_y / det;
        const z = det_z / det;
        reponses.innerHTML = `
            <p>Matrices utilisées :</p>
            <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center;">
                <div>
                    <p>A :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${b1}</td><td>${c1}</td></tr>
                        <tr><td>${a2}</td><td>${b2}</td><td>${c2}</td></tr>
                        <tr><td>${a3}</td><td>${b3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_A = Δ = ${det}</p>
                </div>
                <div>
                    <p>X :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${d1}</td><td>${b1}</td><td>${c1}</td></tr>
                        <tr><td>${d2}</td><td>${b2}</td><td>${c2}</td></tr>
                        <tr><td>${d3}</td><td>${b3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_x = Δx = ${det_x}</p>
                </div>
                <div>
                    <p>Y :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${d1}</td><td>${c1}</td></tr>
                        <tr><td>${a2}</td><td>${d2}</td><td>${c2}</td></tr>
                        <tr><td>${a3}</td><td>${d3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_y = Δy = ${det_y}</p>
                </div>
                <div>
                    <p>Z :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${b1}</td><td>${d1}</td></tr>
                        <tr><td>${a2}</td><td>${b2}</td><td>${d2}</td></tr>
                        <tr><td>${a3}</td><td>${b3}</td><td>${d3}</td></tr>
                    </table><br>
                    <p>det_z = Δz = ${det_z}</p>
                </div>
                <div style="color: black; border: 2px solid green; padding: 15px; background-color: #e6ffe6; text-align: center; min-width: 250px;">
                    <p><strong>Formules :</strong><br>
                    x = Δx / Δ <br>
                    y = Δy / Δ <br>
                    z = Δz / Δ </p>
                    <hr>
                    <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>Solutions :</strong></p>
                    <p><strong>x = </strong>${x.toFixed(2)}</p>
                    <p><strong>y = </strong>${y.toFixed(2)}</p>
                    <p><strong>z = </strong>${z.toFixed(2)}</p>
                </div>
            </div>
        `;
    }
    else{
        reponses.innerHTML = `
            <p>Matrices utilisées :</p>
            <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center;">
                <div>
                    <p>A :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${b1}</td><td>${c1}</td></tr>
                        <tr><td>${a2}</td><td>${b2}</td><td>${c2}</td></tr>
                        <tr><td>${a3}</td><td>${b3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_A = Δ = ${det}</p>
                </div>
                <div>
                    <p>X :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${d1}</td><td>${b1}</td><td>${c1}</td></tr>
                        <tr><td>${d2}</td><td>${b2}</td><td>${c2}</td></tr>
                        <tr><td>${d3}</td><td>${b3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_x = Δx = ${det_x}</p>
                </div>
                <div>
                    <p>Y :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${d1}</td><td>${c1}</td></tr>
                        <tr><td>${a2}</td><td>${d2}</td><td>${c2}</td></tr>
                        <tr><td>${a3}</td><td>${d3}</td><td>${c3}</td></tr>
                    </table><br>
                    <p>det_y = Δy = ${det_y}</p>
                </div>
                <div>
                    <p>Z :</p>
                    <table border="1" cellpadding="5">
                        <tr><td>${a1}</td><td>${b1}</td><td>${d1}</td></tr>
                        <tr><td>${a2}</td><td>${b2}</td><td>${d2}</td></tr>
                        <tr><td>${a3}</td><td>${b3}</td><td>${d3}</td></tr>
                    </table><br>
                    <p>det_z = Δz = ${det_z}</p>
                </div>
                <div style="color: black; border: 2px solid red; padding: 10px; background-color: #ffe5e5; text-align: center; min-width: 250px;">
                    <p><strong>Δ = 0,Δx = 0,Δy = 0;Δz = 0</strong></p>
                    <p><strong>infinité de solution</strong> <i class="fas fa-ban" style="color: red;"></i></p>
                </div>
            </div>
        `;
    }

}

//partie image
function show(id) {//mini gestion d'onglet
    document.querySelectorAll(".img").forEach(div => {
        div.classList.remove("actif");
    });
    document.getElementById(id).classList.add("actif");

    largeur.dispatchEvent(new Event("input"));
    hauteur.dispatchEvent(new Event("input"));
}

let largeur = document.getElementById("larg");
let hauteur = document.getElementById("haut");

let spanLargeur = document.querySelector(".largeur");
let spanHauteur = document.querySelector(".hauteur");

largeur.addEventListener("input", function () {
    const image = document.querySelector(".img.actif");
    const newWidth = largeur.value + "px";
    image.style.width = newWidth;
    spanLargeur.textContent = "Largeur: " + newWidth;
});

hauteur.addEventListener("input", function () {
    const image = document.querySelector(".img.actif");
    const newHeight = hauteur.value + "px";
    image.style.height = newHeight;
    spanHauteur.textContent = "Hauteur: " + newHeight;
});

window.addEventListener("DOMContentLoaded", function () {
    largeur.dispatchEvent(new Event("input"));
    hauteur.dispatchEvent(new Event("input"));
});

//partie paneau
const div = document.querySelectorAll("#paneaux div");
let i = 0;
function pan() {
    document.querySelectorAll(".paneau_1").forEach(div => {
        div.classList.remove("action");
    });
    i = (i+1) % div.length;

    div[i].classList.add("action");
}
pan();
setInterval(pan,2500);

//data table
var monGraphique;
var table;

function calculerEtAfficher() {
  var totalQuantite = 0;
  var totalMontant = 0;
  var prixList = [];

  $('#produits tbody tr').each(function() {
    var quantite = parseFloat($(this).find('td:eq(1)').text());
    var prix = parseFloat($(this).find('td:eq(2)').text());
    var montant = quantite * prix;

    if (!isNaN(montant)) {
      $(this).find('td.montant').text(montant.toLocaleString() + " Ar");
      totalQuantite += quantite;
      totalMontant += montant;
      prixList.push(prix);//montant  
    }
  });

  $('#totalQuantite').text(totalQuantite);
  $('#totalMontant').text(totalMontant.toLocaleString() + " Ar");

  var prixMoyen = prixList.reduce((a, b) => a + b, 0) / prixList.length;
  var prixMin = Math.min(...prixList);
  var prixMax = Math.max(...prixList);

  $('#prixMoyen').text(Math.round(prixMoyen).toLocaleString());
  $('#prixMin').text(prixMin.toLocaleString());
  $('#prixMax').text(prixMax.toLocaleString());

  afficherGraphique(prixMin, prixMoyen, prixMax);
}

function afficherGraphique(min, moyen, max) {
  if (monGraphique) {
    monGraphique.destroy();
  }

  monGraphique = new Chart(document.getElementById('graphique'), {
    type: 'bar',
    data: {
      labels: ['Prix Min', 'Prix Moyen', 'Prix Max'],
      datasets: [{
        label: 'Prix (Ar)',
        data: [min, moyen, max],
        backgroundColor: ['green', 'blue', 'red']
      }]
    },
    options: {
      scales: { y: { beginAtZero: true } }
    }
  });
}

$(document).ready(function() {
  table = $('#produits').DataTable({
    paging: false,
    info: false,
    searching: true,
    lengthChange: false,
    language: { url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/fr-FR.json" }
  });

  $('#btnCalculer').click(function() {
    table.draw(false);
    calculerEtAfficher();
  });

  calculerEtAfficher();
});
