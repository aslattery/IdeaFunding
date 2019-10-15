export const checkForStorage = (type) => {
    let storage;
    try {
        storage = window[type];
        let x = `__validate_storage__`;
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException;
    }
};
