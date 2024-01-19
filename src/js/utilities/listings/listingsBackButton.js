export function backButtonEventListener(backButtonId, targetUrl) {
    document.addEventListener('DOMContentLoaded', () => {
        const backButton = document.getElementById(backButtonId);

        if (backButton) {
            backButton.addEventListener('click', function() {
                window.location.href = targetUrl;
            });
        }
    });
}
