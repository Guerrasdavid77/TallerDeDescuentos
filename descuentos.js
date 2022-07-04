
function aplicaDescuento(precioProducto,descuento){
    descuentoAplicado = (precioProducto * (100 - descuento))/100;
    return descuentoAplicado;
}

function priceDiscount(){
    const inputPrice = document.getElementById("price");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("discount");
    const discount = inputDiscount.value;

    const precioConDescuento = aplicaDescuento(Number(price),Number(discount));
    const result = document.getElementById("result");
    result.innerText = `$ ${precioConDescuento}`;
}

function priceDiscount2(){
    const coupons = [
        {name: "DAVID50", discount:50},
        {name: "DAVID100", discount:100},
        {name: "DAVID20", discount:20},
    ];
    const inputPrice = document.getElementById("price");
    const price = inputPrice.value;
    const inputCoupon = document.getElementById("coupon");
    const couponValue = inputCoupon.value;

    const CouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(CouponValueValid);
    if (!userCoupon) {
        const result = document.getElementById("result");
        result.innerText = `EL CUPÓN NO ES VALIDO`;
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = aplicaDescuento(price, descuento);
        const result = document.getElementById("result");
        result.innerText = `$ ${precioConDescuento}`;
    }
}