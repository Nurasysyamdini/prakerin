export default function usePriceFormat (price) {
    let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return formatter.format(price);
}
