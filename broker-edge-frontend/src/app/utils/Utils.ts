class Utils {
    static formatPrice(price: number) {
        return new Intl.NumberFormat('en-US').format(price);
    }
}

export default Utils;