export const fetchInfo = () => {
    const userInfo = localStorage.getItem('user');

    console.log(userInfo)
     if (userInfo !== null && userInfo !== undefined && userInfo !== "undefined") {
        return JSON.parse(userInfo);
     } else {
         localStorage.clear();
     return null;
     }
};
