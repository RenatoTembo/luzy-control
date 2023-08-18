
var x = 1

window.onload = (e => {
  setInterval(() => {
    modal_shoe()
    input_password()
    selectExpanded()
  }, 2000);
})

function  selectExpanded(){
  var select = document.querySelectorAll('[expand-select]')
  var bi = []
  var sel = []
  select.forEach(sl => {
    if (sl.getElementsByTagName('i').length > 0) {
      bi.push(sl.getElementsByTagName('i'))
      sel.push(sl.getElementsByTagName('select'));
    }
  });
  for (let i = 0; i < bi.length; i++) {
    bi[i][0].addEventListener('click', (e) => {
      sel[i][0].show = true
    })

  }
}

const formatCurrency = (value, currency, localeString) => {
  const options = { style: "currency", currency }
  console.log(value.toLocaleString(localeString, options))
  return value.toLocaleString(localeString, options)
}

function formatarMoeda() {
  var elemento = document.querySelector('[format]');
  elemento.addEventListener('keyup', (ev) => {
    elemento.value = formatCurrency(elemento.value, 'BRL', 'pt-BR')
    console.log(formatCurrency(elemento.value, 'BRL', 'pt-BR'))
  })
  /*let valor = ''
  elemento.forEach((e) => {
    e.addEventListener('keyup', (ev) => {
      valor = e.value
      valor = valor + ''
      valor = parseInt(valor.replace(/[\D]+/g, ''));
 
      valor = valor + '';

      valor = valor.replace(/([0-9]{2})$/g, ",$1");
      if(valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
      }
      if (isNaN(valor)) {
        e.value = 0
      } else {
        console.log(valor.length)
        e.value = valor;
      }
      e.value = valor;
    })
  });*/

}

/**
 * Alterna entre ver a senha e não ver a senha type[password e text]
 */
function input_password() {
  var lbl = document.querySelectorAll('[password-text]')
  var bi = []
  var input = []
  lbl.forEach(lb => {
    if (lb.getElementsByTagName('i').length > 0) {
      bi.push(lb.getElementsByTagName('i'))
      input.push(lb.getElementsByTagName('input'));
    }
  });

  for (let i = 0; i < bi.length; i++) {
    bi[i][0].addEventListener('click', (e) => {
      if (input[i][0].type === 'text') {
        input[i][0].type = 'password'
        bi[i][0].classList.remove('bi-eye-fill')
        bi[i][0].classList.add('bi-eye-slash-fill')
      } else if (input[i][0].type === 'password') {
        input[i][0].type = 'text'
        bi[i][0].classList.remove('bi-eye-slash-fill')
        bi[i][0].classList.add('bi-eye-fill')
      }
    })

  }
}

function modal_shoe() {
  setTimeout(() => {
    var md = document.querySelectorAll('.md');
    var modals = []

    // Ao iniciar o windows ele pega todas as modals
    for (let i = 0; i < md.length; i++) {
      if (md[i].dataset.toggle === 'modals') {
        modals.push(document.getElementById(md[i].dataset.target.split('#')[1]))
      }
    }

    // Quando o usuário clicar no botão, vai abrir a modal
    for (let i = 0; i < md.length; i++) {
      md[i].onclick = function () {
        modals[i].style.display = "block";
      }
    }

    // Quando o usuário clicar no botão <span> (x), vai fechar a modal
    for (let i = 0; i < modals.length; i++) {
      var close = modals[i].getElementsByClassName('md-close')
      for (let j = 0; j < close.length; j++) {
        close[j].onclick = function () {
          modals[i].style.display = "none";
        }
      }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (ev) => {
      for (let i = 0; i < modals.length; i++) {
        if (ev.target === modals[i]) {
          if (modals[i].getAttribute('class').indexOf('modal-static') >= 0) {

          } else {
            modals[i].style.display = "none";
          }
        }
      }
    }
  }, 1000);
}

