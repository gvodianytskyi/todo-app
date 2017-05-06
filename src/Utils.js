export default class Utils {

    static generateNextId(array) {
        return array.length > 0 ? Math.max.apply(null, array) + 1 : 1;
    }

    static removeItemById(array, id) {
        let index = array.indexOf(array.find(item => String(item.id) === String(id)));
        if (index > -1) {
            array.splice(index, 1);
        }
    }

}

