// Scripts Usuario (Ga)

document.addEventListener("DOMContentLoaded", function () {
  const clienteRadio = document.getElementById("cliente");
  const trabajadorRadio = document.getElementById("trabajador");
  const rolSelect = document.getElementById("rol");

  function actualizarRol() {
    if (trabajadorRadio.checked) {
      rolSelect.disabled = false;   // habilitar
      rolSelect.parentElement.style.display = "block"; // mostrar
    } else {
      rolSelect.disabled = true;    // deshabilitar
      rolSelect.parentElement.style.display = "none";  // ocultar
    }
  }

  // ejecutar al inicio
  actualizarRol();

  // ejecutar cada vez que cambie la opcion
  clienteRadio.addEventListener("change", actualizarRol);
  trabajadorRadio.addEventListener("change", actualizarRol);
// Scripts Usuario (Ga)
});

// Scripts de citas (Ga)
document.addEventListener("DOMContentLoaded", function () {
  const establecimientoRadios = document.querySelectorAll('input[name="establecimiento"]');
  const servicioSelect = document.getElementById("servicio");
  const opciones = servicioSelect.querySelectorAll("option");

  establecimientoRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      const tipo = this.value; // "salon" o "barberia"

      opciones.forEach(op => {
        const permitido = op.getAttribute("data-establecimiento");

        if (permitido === "ambos" || permitido === tipo || op.value === "") {
          op.disabled = false;
          op.style.display = "block"; // visible
        } else {
          op.disabled = true;
          op.style.display = "none"; // oculto
        }
      });

      // Reinicia la selección cada vez que cambia el tipo
      servicioSelect.value = "";
    });
  });
});

const regiones = {
  "metropolitana": ["Santiago", "Puente Alto", "Maipú", "La Florida"],
  "valparaiso": ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"],
  "biobio": ["Concepción", "Chillán", "Los Ángeles"],
  // Agregar las demás regiones con sus ciudades...
};

const regionSelect = document.getElementById("region");
const ciudadSelect = document.getElementById("ciudad");

regionSelect.addEventListener("change", () => {
  const region = regionSelect.value;
  ciudadSelect.innerHTML = '<option value="">-- Seleccionar Ciudad --</option>';

  if (regiones[region]) {
    regiones[region].forEach(ciudad => {
      const option = document.createElement("option");
      option.value = ciudad.toLowerCase().replace(/\s/g, "_");
      option.text = ciudad;
      ciudadSelect.appendChild(option);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const lugarRadios = document.querySelectorAll('input[name="lugar"]');
  const lugarDetalle = document.getElementById("lugarDetalle");

  // Lista de locales disponibles
  const locales = [
    "Barbería Santiago Centro",
    "Salón Providencia",
    "Barbería Las Condes",
    "Salón Viña del Mar",
  ];

  lugarRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      lugarDetalle.innerHTML = ""; // limpiar contenido previo

      if (this.value === "local") {
        // Crear select con locales
        const label = document.createElement("label");
        label.className = "form-label";
        label.textContent = "Selecciona el Local";

        const select = document.createElement("select");
        select.className = "form-select";
        select.name = "local_detalle";
        select.required = true;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "-- Seleccionar Local --";
        select.appendChild(defaultOption);

        locales.forEach(local => {
          const option = document.createElement("option");
          option.value = local.toLowerCase().replace(/\s/g, "_");
          option.text = local;
          select.appendChild(option);
        });

        lugarDetalle.appendChild(label);
        lugarDetalle.appendChild(select);
      }

      if (this.value === "domicilio") {
        // Crear input para escribir dirección
        const label = document.createElement("label");
        label.className = "form-label";
        label.textContent = "Ingresa tu Dirección";

        const input = document.createElement("input");
        input.type = "text";
        input.className = "form-control";
        input.name = "direccion";
        input.placeholder = "Calle, número, comuna";
        input.required = true;

        lugarDetalle.appendChild(label);
        lugarDetalle.appendChild(input);
      }
    });
  });
});
