import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        toast.removeEventListener
    }
})


export function showToast(icon, title) {
    Toast.fire({
        icon,
        title
    })
}
