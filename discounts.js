const coupons = {
  extra15: 15,
  extra25: 25,
  extra5: 5,
};

function getDiscountedPrice(price, discount) {
  return (price * (100 - discount)) / 100;
}

function onClickButtonPriceDiscount() {
  const priceInput = document.getElementById("inputPrice");
  const priceValue = priceInput.value;

  const discountInput = document.getElementById("inputDiscount");
  let discountValue =
    discountInput.value === "" ? "0" : parseInt(discountInput.value);

  const couponInput = document.getElementById("couponDiscount");
  const couponValue = couponInput.value;

  //get coupon value discount
  if (couponValue !== "") {
    if (!coupons.hasOwnProperty(couponValue)) {
      const couponError = document.getElementById("couponError");
      couponError.innerText = "not a valid coupon";
    } else {
      couponError.innerText = "";
      discountValue += parseInt(coupons[couponValue]);
    }
  } else {
    couponError.innerText = "";
  }

  const priceWithDiscount = getDiscountedPrice(priceValue, discountValue);
  const resultP = document.getElementById("resultP");
  resultP.innerText = `The price with discount is: $${priceWithDiscount}`;
}
