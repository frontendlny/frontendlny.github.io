const tokenKey = 'token';
//存
export function setToken(token){
    return sessionStorage.setItem(tokenKey,token);
};
//取
export function getToken(){
    return sessionStorage.getItem(tokenKey);
};
//删
export function removeToken(){
    return sessionStorage.removeItem(tokenKey);
};