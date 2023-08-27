export const fetchInfo = (): any => {
    const userInfo = localStorage.getItem('user');

    if (userInfo !== null && userInfo !== undefined && userInfo !== "undefined") {
        return JSON.parse(userInfo);
    } else {
        localStorage.clear();
        return null;
    }
};
