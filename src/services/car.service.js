import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAll: ()=>axiosService.get(urls.cars),
    create: (car)=>axiosService.post(urls.cars, car),
    addPhotoById:(id, data)=>axiosService.patch(`${urls.cars}/${id}`, data)
}

export {carService};