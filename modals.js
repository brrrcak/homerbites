console.log("modals.js v1.4 Loaded - Updated Design");

// A shared library for creating styled, site-wide pop-up modals that match the new Homer Bites design

function showCustomAlert(message, type = 'info') {
    // Remove any existing alert first
    const existingAlert = document.getElementById('custom-alert-overlay');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'custom-alert-overlay';
    overlay.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50';
    
    // Determine icon and color based on type
    const iconColor = type === 'success' ? 'text-green-500' : type === 'error' ? 'text-red-500' : 'text-blue-500';
    const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info';
    const buttonColor = type === 'success' ? 'bg-green-500 hover:bg-green-600' : 
                       type === 'error' ? 'bg-red-500 hover:bg-red-600' : 
                       'bg-blue-500 hover:bg-blue-600';
    
    // Create modal content with new styling
    const modalHTML = `
        <div class="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center modal-slide-up">
            <div class="mb-4">
                <i data-lucide="${iconName}" class="w-12 h-12 ${iconColor} mx-auto"></i>
            </div>
            <p class="text-gray-800 mb-6 leading-relaxed">${message}</p>
            <button id="custom-alert-ok" class="px-8 py-3 ${buttonColor} text-white rounded-full shadow-lg transition-all duration-300 font-semibold btn-hover-scale">
                OK
            </button>
        </div>
    `;
    
    overlay.innerHTML = modalHTML;
    document.body.appendChild(overlay);
    
    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    // Add event listener to OK button
    document.getElementById('custom-alert-ok').addEventListener('click', () => {
        overlay.remove();
    });
    
    // Add CSS animations if not already present
    addModalStyles();
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
        overlay.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50';
        
        const modalHTML = `
            <div class="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center modal-slide-up">
                <div class="mb-4">
                    <i data-lucide="alert-triangle" class="w-12 h-12 text-orange-500 mx-auto"></i>
                </div>
                <p class="text-gray-800 mb-6 leading-relaxed">${message}</p>
                <div class="flex gap-4">
                    <button id="custom-confirm-cancel" class="flex-1 px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 font-semibold btn-hover-scale">
                        Cancel
                    </button>
                    <button id="custom-confirm-ok" class="flex-1 px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 font-semibold btn-hover-scale">
                        Confirm
                    </button>
                </div>
            </div>
        `;
        
        overlay.innerHTML = modalHTML;
        document.body.appendChild(overlay);
        
        // Initialize Lucide icons if available
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
        
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
        
        // Add CSS animations if not already present
        addModalStyles();
    });
}

function showCustomPrompt(message, placeholder = '', defaultValue = '') {
    return new Promise(resolve => {
        // Remove any existing prompt first
        const existingPrompt = document.getElementById('custom-prompt-overlay');
        if (existingPrompt) {
            existingPrompt.remove();
        }
        
        const overlay = document.createElement('div');
        overlay.id = 'custom-prompt-overlay';
        overlay.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50';
        
        const modalHTML = `
            <div class="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 modal-slide-up">
                <div class="mb-4">
                    <i data-lucide="message-square" class="w-8 h-8 text-blue-500 mx-auto"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">${message}</h3>
                <input type="text" id="custom-prompt-input" placeholder="${placeholder}" value="${defaultValue}" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all mb-6">
                <div class="flex gap-4">
                    <button id="custom-prompt-cancel" class="flex-1 px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 font-semibold btn-hover-scale">
                        Cancel
                    </button>
                    <button id="custom-prompt-ok" class="flex-1 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 font-semibold btn-hover-scale">
                        OK
                    </button>
                </div>
            </div>
        `;
        
        overlay.innerHTML = modalHTML;
        document.body.appendChild(overlay);
        
        // Initialize Lucide icons if available
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
        
        const input = document.getElementById('custom-prompt-input');
        const okButton = document.getElementById('custom-prompt-ok');
        const cancelButton = document.getElementById('custom-prompt-cancel');
        
        // Focus the input
        setTimeout(() => input.focus(), 100);
        
        // Handle Enter key
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                okButton.click();
            } else if (e.key === 'Escape') {
                cancelButton.click();
            }
        });
        
        okButton.addEventListener('click', () => {
            const value = input.value;
            overlay.remove();
            resolve(value);
        });
        
        cancelButton.addEventListener('click', () => {
            overlay.remove();
            resolve(null);
        });
        
        // Add CSS animations if not already present
        addModalStyles();
    });
}

function showCustomLoader(message = 'Loading...') {
    // Remove any existing loader first
    const existingLoader = document.getElementById('custom-loader-overlay');
    if (existingLoader) {
        existingLoader.remove();
    }
    
    const overlay = document.createElement('div');
    overlay.id = 'custom-loader-overlay';
    overlay.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50';
    
    const modalHTML = `
        <div class="bg-white rounded-3xl shadow-2xl p-8 text-center modal-slide-up">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p class="text-gray-800 font-medium">${message}</p>
        </div>
    `;
    
    overlay.innerHTML = modalHTML;
    document.body.appendChild(overlay);
    
    // Add CSS animations if not already present
    addModalStyles();
    
    return {
        close: () => overlay.remove(),
        updateMessage: (newMessage) => {
            const messageEl = overlay.querySelector('p');
            if (messageEl) messageEl.textContent = newMessage;
        }
    };
}

function hideCustomLoader() {
    const existingLoader = document.getElementById('custom-loader-overlay');
    if (existingLoader) {
        existingLoader.remove();
    }
}

// Function to add required CSS if not already present
function addModalStyles() {
    if (document.getElementById('homer-bites-modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'homer-bites-modal-styles';
    style.textContent = `
        .modal-slide-up {
            animation: modalSlideUp 0.3s ease-out forwards;
        }
        
        .modal-fade-in {
            animation: modalFadeIn 0.3s ease-out forwards;
        }
        
        .btn-hover-scale {
            transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        
        .btn-hover-scale:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
        
        @keyframes modalSlideUp {
            from { 
                transform: translateY(20px); 
                opacity: 0; 
            }
            to { 
                transform: translateY(0); 
                opacity: 1; 
            }
        }
        
        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
}

// Export functions for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showCustomAlert,
        showCustomConfirm,
        showCustomPrompt,
        showCustomLoader,
        hideCustomLoader
    };
}

// Initialize styles immediately
addModalStyles();

function showCustomConfirm(message) {
    return new Promise(resolve => {
        const existingConfirm = document.getElementById('custom-confirm-overlay');
        if (existingConfirm) existingConfirm.remove();

        const overlay = document.createElement('div');
        overlay.id = 'custom-confirm-overlay';
        overlay.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50';

        const modalHTML = `
            <div class="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center modal-slide-up">
                <div class="mb-4">
                    <i data-lucide="alert-triangle" class="w-12 h-12 text-orange-500 mx-auto"></i>
                </div>
                <p class="text-gray-800 mb-6 leading-relaxed">${message}</p>
                <div class="flex gap-4">
                    <button id="custom-confirm-cancel" class="flex-1 px-6 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 font-semibold btn-hover-scale">
                        Cancel
                    </button>
                    <button id="custom-confirm-ok" class="flex-1 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 font-semibold btn-hover-scale">
                        Confirm
                    </button>
                </div>
            </div>
        `;

        overlay.innerHTML = modalHTML;
        document.body.appendChild(overlay);

        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }

        document.getElementById('custom-confirm-ok').addEventListener('click', () => {
            overlay.remove();
            resolve(true);
        });

        document.getElementById('custom-confirm-cancel').addEventListener('click', () => {
            overlay.remove();
            resolve(false);
        });
    });
}
