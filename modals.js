// A shared library for creating styled, site-wide pop-up modals.

function showCustomAlert(message, type = 'info') {
    // Remove any existing alert first
    const existingAlert = document.getElementById('custom-alert-overlay');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'custom-alert-overlay';
    overlay.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in';
    overlay.style.zIndex = '100';
    
    // Create modal content
    const modalHTML = `
        <div class="popup-border-wrap rounded-3xl shadow-2xl animate-scale-in max-w-sm w-full">
            <div class="backdrop-blur-2xl bg-slate-800/50 rounded-3xl p-8 text-center text-white">
                <p class="mb-6">${message}</p>
                <button id="custom-alert-ok" class="glow-button glow-button-blue">OK</button>
            </div>
        </div>
    `;
    
    overlay.innerHTML = modalHTML;
    document.body.appendChild(overlay);

    // Add event listener to OK button
    document.getElementById('custom-alert-ok').addEventListener('click', () => {
        overlay.remove();
    });
}

function showCustomConfirm(message) {
    return new Promise(resolve => {
        // Remove any existing confirm first
        const existingConfirm = document.getElementById('custom-confirm-overlay');
        if (existingConfirm) {
            existingConfirm.remove();
        }

        const overlay = document.createElement('div');
        overlay.id = 'custom-confirm-overlay';
        overlay.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in';
        overlay.style.zIndex = '101';
        
        const modalHTML = `
            <div class="popup-border-wrap rounded-3xl shadow-2xl animate-scale-in max-w-sm w-full">
                <div class="backdrop-blur-2xl bg-slate-800/50 rounded-3xl p-8 text-center text-white">
                    <p class="mb-6">${message}</p>
                    <div class="flex gap-4">
                        <button id="custom-confirm-cancel" class="glow-button glow-button-gray flex-1">Cancel</button>
                        <button id="custom-confirm-ok" class="glow-button glow-button-red flex-1">Confirm</button>
                    </div>
                </div>
            </div>
        `;
        
        overlay.innerHTML = modalHTML;
        document.body.appendChild(overlay);

        const okButton = document.getElementById('custom-confirm-ok');
        const cancelButton = document.getElementById('custom-confirm-cancel');

        okButton.addEventListener('click', () => {
            overlay.remove();
            resolve(true);
        });

        cancelButton.addEventListener('click', () => {
            overlay.remove();
            resolve(false);
        });
    });
}
