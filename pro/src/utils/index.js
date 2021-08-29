import service from "./request"

import api from "./api"

export function banners(){
    return service({
        url:api.banner,
        data:{},
        method:'get'
    })
}