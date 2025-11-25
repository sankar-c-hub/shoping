const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw-lO_kK_lkZMXXyHCnS2Vpv0AuO5i7qtKyy2O0suF16aK-nQrtBPnWNR97tT7gtPbB/exec";

document.getElementById('shippingForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMsg');
    const errorMsg = document.getElementById('errorMsg');

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    let formData = {
        toName: toName.value,
        toPhone: toPhone.value,
        toPincode: toPincode.value,
        toAddress: toAddress.value,
        fromName: fromName.value,
        fromPhone: fromPhone.value
    };

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        successMsg.style.display = "block";
        shippingForm.reset();

        fromName.value = "CR FASHIONS";
        fromPhone.value = "7032208265";

        setTimeout(() => successMsg.style.display = "none", 3000);

    } catch (err) {
        errorMsg.style.display = "block";
        setTimeout(() => errorMsg.style.display = "none", 3000);
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Information";
});
