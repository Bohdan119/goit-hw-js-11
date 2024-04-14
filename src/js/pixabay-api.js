import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



export async function searchImages(searchWord, myGallery) {

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '43249627-6464a1b02c37cf8fbedd51288';

    const params = new URLSearchParams({
        key: API_KEY,
        q: "dog+cat+tiger+lion",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
try {
        const response = await fetch(`${BASE_URL}?${params}`);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        return response.json();
    } catch (error) {
        throw new Error('Failed to fetch images');
    }
}


// fetch(`${BASE_URL}?${params}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         console.log("work");
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log("catch", error))
    
// }
