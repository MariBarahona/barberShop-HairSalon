// -------------------------------
// Cuentas simuladas
// -------------------------------
const cuentas = [
  {
    tipo: "cliente",
    nombre: "Maria Escudero",
    email: "mariaescudero@gmail.com",
    password: "123456"
  },
  {
    tipo: "trabajador",
    nombre: "Galio Soto",
    email: "galiosoto@gmail.com",
    password: "abcdef"
  }
];

// -------------------------------
// Scripts Usuario (rol cliente/trabajador)
// -------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const clienteRadio = document.getElementById("cliente");
  const trabajadorRadio = document.getElementById("trabajador");
  const rolSelect = document.getElementById("rol");

  function actualizarRol() {
    if (trabajadorRadio && trabajadorRadio.checked) {
      rolSelect.disabled = false;
      rolSelect.parentElement.style.display = "block";
    } else if (rolSelect) {
      rolSelect.disabled = true;
      rolSelect.parentElement.style.display = "none";
    }
  }

  actualizarRol();
  if (clienteRadio) clienteRadio.addEventListener("change", actualizarRol);
  if (trabajadorRadio) trabajadorRadio.addEventListener("change", actualizarRol);

  // -------------------------------
  // Login simulado
  // -------------------------------
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value;

      // Buscar en usuarios registrados y cuentas simuladas
      const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const usuarios = [...cuentas, ...usuariosRegistrados];

      const usuario = usuarios.find(u => u.email.toLowerCase() === email && u.password === password);

      if (usuario) {
        localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
        mostrarAlerta("Inicio de sesión correcto", "success");
        window.location.href = "home.html";
      } else {
        mostrarAlerta("Usuario o contraseña incorrectos", "danger");
      }
    });
  }
});

// -------------------------------
// REGISTRO: guardar usuario y redirigir con mensaje
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const formRegistro = document.getElementById('registroForm');
  if (!formRegistro) return;

  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre')?.value.trim();
    const email = document.getElementById('email')?.value.trim().toLowerCase();
    const password = document.getElementById('password')?.value;
    const tipo = document.querySelector('input[name="tipo_usuario"]:checked')?.value || 'cliente';
    const rol = (tipo === 'trabajador') ? (document.getElementById('rol')?.value || null) : null;

    if (!nombre || !email || !password) {
      mostrarAlerta('Completa todos los campos.', 'warning');
      return;
    }

    // Cargar usuarios existentes
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Evitar correos repetidos
    if (usuarios.some(u => u.email === email)) {
      mostrarAlerta('Ese correo ya existe. Intenta iniciar sesión.', 'danger');
      return;
    }

    // Guardar nuevo usuario
    const nuevo = { nombre, email, password, tipo, rol };
    usuarios.push(nuevo);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Flash + redirección
    sessionStorage.setItem('flash', '✅ Cuenta creada con éxito. Ya puedes iniciar sesión.');
    window.location.href = 'home.html';
  });
});

// === FLASH: mostrar mensaje temporal si existe ===
document.addEventListener('DOMContentLoaded', () => {
  const msg = sessionStorage.getItem('flash');
  if (msg) {
    mostrarAlerta(msg, 'success');
    sessionStorage.removeItem('flash');
  }
});

// -------------------------------
// Actualizar botones en home.html según sesión
// -------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));
  const btnLogin = document.getElementById("btnLogin");
  const btnRegister = document.getElementById("btnRegister");

  if (usuarioLogeado) {
    // Cambiar botón de login por nombre de usuario
    if (btnLogin) {
      btnLogin.innerHTML = `<i class="bi bi-person-circle"></i> ${usuarioLogeado.nombre}`;
      btnLogin.href = "#";
    }

    // Cambiar botón de registrar por cerrar sesión
    if (btnRegister) {
      btnRegister.innerText = "Cerrar Sesión";
      btnRegister.href = "#";
      btnRegister.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogeado");
        location.reload();
      });
    }
  }
});

// Helper: alerta Bootstrap en la esquina
function mostrarAlerta(texto, tipo = 'info') {
  const div = document.createElement('div');
  div.className = `alert alert-${tipo} alert-dismissible fade show`;
  div.setAttribute('role', 'alert');
  div.style.position = 'fixed';
  div.style.top = '1rem';
  div.style.right = '1rem';
  div.style.zIndex = '1080';
  div.innerHTML = `
    ${texto}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  document.body.appendChild(div);
  setTimeout(() => div?.remove(), 4000);
}
