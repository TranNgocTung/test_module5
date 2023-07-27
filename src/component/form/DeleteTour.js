
import axios from "axios";

import Swal from "sweetalert2";

export default function DeleteTour(id){
    Swal.fire({
        position: 'top-end',
        title: 'Do you want to delete this student?',
        showDenyButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:8080/api/tour/delete/${id}`)
                .then(() => {
                    Swal.fire({
                        width: '450px',
                        position: 'top-end',
                        title: 'Deleted!',
                        icon: 'success',
                    }).then(() => {
                        window.location.reload();
                    });
                })
        } else if (result.isDenied) {
            Swal.fire({
                width: '450px',
                position: 'top-end',
                title: 'Canceled!',
                icon: 'info'
            })
        }
    });

// export function DeleteTour(id){
//     if (window.confirm("Are you sure?")) {
//         axios.delete(`http://localhost:8080/api/tour/delete/${id}`)
//             .then(() => {
//             })
//             .catch((error) => {
//                 console.error(error);
//                 alert("Failed to delete the tour.");
//             });
//     }

}