export async function applyPostApplication() {
    const applyFormData = document.querySelector('#applyForm');

    if (applyFormData) {
        applyFormData.addEventListener('submit', async (e) => {
            e.preventDefault();
            const applyFormData = e.target;
            const formData = new FormData(applyFormData);
            const application = Object.fromEntries(formData.entries());

            applyPostApplication(application);
        })
    }
}