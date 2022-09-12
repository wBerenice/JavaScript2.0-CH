

const btn = document.getElementById("btn-principal")
btn.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
})

const btnImagen = document.getElementById("btn-imagen")
btnImagen.addEventListener('click', () => {

   

Swal.fire({
    title: '¡Gracias por tu compra!',
    text: 'Modal with a custom image.',
    // imageUrl: 'https://unsplash.it/400/200',
    imageUrl: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
    // imageWidth: 400,
    // imageHeight: 200,
    imageAlt: 'Custom image',
  })

})
