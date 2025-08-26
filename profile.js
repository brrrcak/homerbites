// Supabase initialization
const SUPABASE_URL = 'https://qtjwacufuwkehfkkijsl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI_T5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0andhY3VmdXdrZWhma2tpanNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwOTY5NTksImV4cCI6MjA3MTY3Mjk1OX0.bh33UFK75tnb13Cr0FhI-MByl0OTEtPj5lJdoJoLuQc';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

document.addEventListener('DOMContentLoaded', async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        // If no user is logged in, redirect to the homepage
        window.location.href = 'index.html';
        return;
    }

    currentUser = user;
    loadUserProfile();
    loadUserFavorites();

    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', handleProfileUpdate);
});

async function loadUserProfile() {
    document.getElementById('email').value = currentUser.email;

    const { data, error } = await supabase
        .from('user_profiles')
        .select('full_name, username')
        .eq('id', currentUser.id)
        .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found, which is fine for new users
        console.error('Error fetching profile:', error);
        return;
    }
    
    if (data) {
        document.getElementById('fullName').value = data.full_name || '';
        document.getElementById('username').value = data.username || '';
    }
}

async function handleProfileUpdate(event) {
    event.preventDefault();
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.textContent = 'Saving...';
    submitButton.disabled = true;

    const updates = {
        id: currentUser.id,
        full_name: document.getElementById('fullName').value,
        username: document.getElementById('username').value,
        updated_at: new Date(),
    };

    const { error } = await supabase.from('user_profiles').upsert(updates);

    if (error) {
        alert('Error updating profile: ' + error.message);
    } else {
        alert('Profile saved successfully!');
    }
    
    submitButton.textContent = 'Save Changes';
    submitButton.disabled = false;
}

async function loadUserFavorites() {
    const container = document.getElementById('favoritesContainer');
    container.innerHTML = '<p class="text-gray-400">Loading your favorites...</p>';

    const { data, error } = await supabase
        .from('user_favorites')
        .select('restaurants(*)') // This is a Supabase feature to get the full restaurant details
        .eq('user_id', currentUser.id);

    if (error) {
        console.error('Error fetching favorites:', error);
        container.innerHTML = '<p class="text-red-400">Could not load favorites.</p>';
        return;
    }

    if (data.length === 0) {
        container.innerHTML = '<p class="text-gray-400">You haven\'t favorited any restaurants yet. Go find some!</p>';
        return;
    }

    container.innerHTML = data.map(fav => {
        const restaurant = fav.restaurants;
        if (!restaurant) return ''; // Skip if restaurant data is missing for some reason
        const imageUrl = restaurant.image_url || 'https://placehold.co/400x200/1e293b/ffffff?text=N/A';
        return `
            <a href="index.html" class="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center space-x-4 hover:bg-white/10 transition-colors">
                <img src="${imageUrl}" class="w-20 h-20 rounded-lg object-cover flex-shrink-0" onerror="this.src='https://placehold.co/80x80/1e293b/ffffff?text=N/A';">
                <div>
                    <h3 class="font-bold text-white">${restaurant.name}</h3>
                    <p class="text-sm text-gray-300 line-clamp-2">${restaurant.description || 'No description available.'}</p>
                </div>
            </a>
        `;
    }).join('');
}
