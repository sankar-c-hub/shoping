const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3frwZZMPfQH0mFNxch8Q03bLsk6Gx6imksHsZ1eG0oHVZw4HXSDawVFRrfeWRv8ir/exec";

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
