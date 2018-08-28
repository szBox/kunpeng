const global = {
    session: {
        set(key, val) {
            sessionStorage.setItem(key, JSON.stringify(val));
        },
        get(key) {
            return JSON.parse(sessionStorage.getItem(key)) || {};
        },
        clear() {
            sessionStorage.clear();
        }
    },
    menu: {
        get(menu) {
            return global.session.get('user').menus || [];
        }
    }
}




export default global;