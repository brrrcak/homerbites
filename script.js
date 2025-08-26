// Simplified script.js - Remove ALL import statements and use global supabase



// Global variables
let map;
let currentFilter = null;
let mapMarkers = [];
let restaurants = []; // This will now be loaded from Supabase
let currentUser = null;
let userFavorites = new Set(); // To store IDs of favorited restaurants

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    if (typeof supabase === 'undefined') {
        console.error('Supabase not loaded. Check your credentials.');
        restaurants = getStaticRestaurants();
        initializeWithoutSupabase();
        return;
    }
    
    await checkAuthState(); // Sets currentUser
    if(currentUser) {
        await loadUserFavorites(); // Loads favorites if user is logged in
    }
    await loadRestaurantsFromSupabase();
    
    populateTagCarousel();
    setupSearch();
    setupRandomButton();
    setupViewToggle();
    // setupAuthButtons is now handled by updateAuthUI
    initializeMap();
    setupSubmissionForm();

    showInitialMessage();
}

// --- CORE FUNCTIONS (MODIFIED) ---

function showInitialMessage() {
    const container = document.getElementById('categoryContainer');
    if (!container) return;

    // Hide view toggle buttons on initial load
    const viewToggleSection = document.getElementById('viewToggleSection');
    if (viewToggleSection) {
        viewToggleSection.classList.add('hidden');
    }
    
    // Clear the main container so no message is shown
    container.innerHTML = '';
}


// --- AUTHENTICATION & DATA FUNCTIONS (MODIFIED) ---

async function checkAuthState() {
    if (typeof supabase === 'undefined') return;
    try {
        const { data: { user } } = await supabase.auth.getUser();
        currentUser = user;
        updateAuthUI(); // Update UI based on auth state
    } catch (error) {
        console.error('Auth check failed:', error);
    }
}

async function loadUserFavorites() {
    if (!currentUser) return;
    const { data, error } = await supabase
        .from('user_favorites')
        .select('restaurant_id')
        .eq('user_id', currentUser.id);

    if (error) {
        console.error("Error loading favorites:", error);
        return;
    }
    // Create a Set for quick lookups
    userFavorites = new Set(data.map(fav => fav.restaurant_id));
}

function updateAuthUI() {
    let authContainer = document.getElementById('authContainer');
    if (!authContainer) return; 

    if (currentUser) {
        authContainer.innerHTML = `
            <a href="profile.html" class="glow-button glow-button-purple text-xs">Profile</a>
            <button id="logoutBtn" class="glow-button glow-button-red text-xs">Logout</button>
            <div class="h-6 w-px bg-white/20"></div>
            <button id="submitRestaurantBtn" class="glow-button glow-button-red text-xs">Submit Restaurant</button>
        `;
        document.getElementById('logoutBtn').addEventListener('click', handleLogout);
        document.getElementById('submitRestaurantBtn').addEventListener('click', openSubmissionModal);
    } else {
        authContainer.innerHTML = `
            <button id="loginBtn" class="glow-button glow-button-green text-xs">Login</button>
            <button id="signupBtn" class="glow-button glow-button-blue text-xs">Sign Up</button>
            <div class="h-6 w-px bg-white/20"></div>
            <button id="submitRestaurantBtn" class="glow-button glow-button-red text-xs">Submit Restaurant</button>
        `;
        document.getElementById('loginBtn').addEventListener('click', () => showAuthModal('login'));
        document.getElementById('signupBtn').addEventListener('click', () => showAuthModal('signup'));
        document.getElementById('submitRestaurantBtn').addEventListener('click', openSubmissionModal);
    }
}

async function handleLogout() {
    if (typeof supabase === 'undefined') return;
    const { error } = await supabase.auth.signOut();
    if (!error) {
        currentUser = null;
        userFavorites.clear(); // Clear favorites on logout
        updateAuthUI();
    }
}

// --- FAVORITING LOGIC ---

async function toggleFavorite(event, restaurantId) {
    event.stopPropagation(); // Prevents the card's onclick from firing

    if (!currentUser) {
        alert('Please log in to save your favorites!');
        showAuthModal('login');
        return;
    }

    const isFavorited = userFavorites.has(restaurantId);
    const heartIcon = document.querySelector(`.fav-btn[data-id="${restaurantId}"] svg`);

    if (isFavorited) {
        // --- Remove from favorites ---
        const { error } = await supabase.from('user_favorites').delete().match({ user_id: currentUser.id, restaurant_id: restaurantId });
        if (error) {
            console.error('Error removing favorite:', error);
        } else {
            userFavorites.delete(restaurantId);
            // Update heart icon to outlined
            heartIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>`;
            heartIcon.classList.remove('text-red-500', 'fill-current');
            heartIcon.classList.add('text-gray-500');
        }
    } else {
        // --- Add to favorites ---
        const { error } = await supabase.from('user_favorites').insert({ user_id: currentUser.id, restaurant_id: restaurantId });
        if (error) {
            console.error('Error adding favorite:', error);
        } else {
            userFavorites.add(restaurantId);
            // Update heart icon to filled
            heartIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>`;
            heartIcon.classList.remove('text-gray-500');
            heartIcon.classList.add('text-red-500', 'fill-current');
        }
    }
}


// --- UI & CARD FUNCTIONS (MODIFIED) ---

function createRestaurantCard(restaurant) {
    const imageUrl = restaurant.imageURL || 'https://placehold.co/400x200/1e293b/ffffff?text=Image+Not+Found';
    const isFavorited = userFavorites.has(restaurant.id);
    
    // Heart SVG changes based on favorite status
    const heartIconSVG = isFavorited
        ? `<svg class="w-6 h-6 text-red-500 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`
        : `<svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`;

    return `
        <div class="restaurant-card group" onclick="openRestaurantModal(${restaurant.id})">
            <div class="restaurant-image">
                <img src="${imageUrl}" alt="${restaurant.name}" loading="lazy" onerror="this.src='https://placehold.co/400x200/1e293b/ffffff?text=Image+Not+Found'; this.onerror=null;">
                <div class="restaurant-overlay"></div>
            </div>
            <div class="bg-white p-6 rounded-b-3xl text-gray-800 flex flex-col justify-between h-full">
                <div>
                    <div class="flex items-start justify-between mb-3">
                        <h3 class="text-xl font-bold text-gray-900">${restaurant.name}</h3>
                        <div class="flex items-center space-x-1 flex-shrink-0 ml-4">
                            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <span class="text-sm font-medium text-gray-700">${restaurant.rating || 'N/A'}</span>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3">${restaurant.description}</p>
                </div>
                <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-2">
                    <button onclick="openRestaurantModal(${restaurant.id})" class="flex-grow px-4 py-2 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors text-center text-sm">
                        View Details
                    </button>
                    <button class="fav-btn p-2 rounded-lg hover:bg-gray-200" data-id="${restaurant.id}" onclick="toggleFavorite(event, ${restaurant.id})">
                        ${heartIconSVG}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// All other functions (search, modals, map, etc.) remain the same as the previous version.
// I have included them below so you can replace the entire file.
function initializeWithoutSupabase() {populateTagCarousel();setupSearch();setupRandomButton();setupViewToggle();updateAuthUI();initializeMap();setupSubmissionForm();showInitialMessage();console.log('Running in fallback mode without Supabase');}
function getStaticRestaurants() {return [{id:1,name:"Cosmic Kitchen",description:"A cozy Homer favorite serving hearty breakfasts, smash burgers, and Mexican-inspired plates with plenty of vegetarian options—all in a laid-back, rustic setting.",address:"510 E Pioneer Ave, Homer, AK 99603",phone:"(907) 235-1301",website:"https://www.cosmickitchenhomer.com/",hours:"Tuesday - Saturday: 11:00AM - 7:00PM",imageURL:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/481341661_122129057186592631_7628068687369387549_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5icgLVwy9UMQ7kNvwFVUR7n&_nc_oc=AdlpuMF-gtAUBXSK4ZhHcZ2df-S--7j_ZJoMQhF64TU6DPSH1H2Sme1eAmANG6YxUY4&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=OC6MpAtgGyG_Ln-OU_O6zg&oh=00_AfUk8g1iC0r0tpqXDGn_BTQY4thLnN6tGxhCyjYM5Yv_EA&oe=68B08DA0",lat:59.647521,lng:-151.533005,menu:"https://order.toasttab.com/online/cosmickitchenhomer",tags:["restaurant","burgers","mexican","breakfast","vegetarian"],rating:4,priceRange:"$-$$"},{id:2,name:"Fat Olive's Restaurant",description:"Italian cuisine featuring pizza and American dishes",address:"",phone:"(907) 235-8488",website:"https://www.fatoliveshomer.com/",hours:"Mo-Su 11:00-20:30",imageURL:"",lat:null,lng:null,menu:"",tags:["restaurant","italian","pizza","american"],rating:null,priceRange:""},];}
function setupSearch(){const findBtn=document.getElementById('findBtn');const viewAllBtn=document.getElementById('viewAllBtn');const searchInput=document.getElementById('tagSearchInput');const submitBtn=document.getElementById('submitRestaurantBtn');if(findBtn){findBtn.addEventListener('click',handleSearch);}
if(searchInput){searchInput.addEventListener('keypress',(event)=>{if(event.key==='Enter'){handleSearch();}});}
if(viewAllBtn){viewAllBtn.addEventListener('click',()=>{currentFilter='all';searchInput.value='';renderAllAlphabetical();updateMapMarkers();});}
if(submitBtn){submitBtn.addEventListener('click',openSubmissionModal);}}
function renderAllAlphabetical(){const container=document.getElementById('categoryContainer');if(!container)return;const sortedRestaurants=[...restaurants].sort((a,b)=>a.name.localeCompare(b.name));container.innerHTML='';const viewToggleSection=document.getElementById('viewToggleSection');if(viewToggleSection){viewToggleSection.classList.remove('hidden');}
const section=document.createElement('div');section.className='animate-slide-up';if(sortedRestaurants.length>0){section.innerHTML=`
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-white mb-4">All Restaurants</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${sortedRestaurants.map(restaurant=>createRestaurantCard(restaurant)).join('')}
            </div>
        `;}else{section.innerHTML=`
            <div class="text-center py-16 animate-fade-in">
                <h2 class="text-3xl font-bold text-white mb-4">No Restaurants Found</h2>
                <p class="text-xl text-gray-300">There are currently no restaurants to display.</p>
            </div>
        `;}
container.appendChild(section);}
function populateTagCarousel(){populateStaticTags();}
function populateStaticTags(){const container=document.getElementById('staticTagsContainer');if(!container)return;const tagsToIgnore=['restaurant','cafe','bar','pub','fast_food','diner','bistro','grill','brewery','regional','international'];const allTags=[...new Set(restaurants.flatMap(r=>r.tags||[]))].filter(tag=>!tagsToIgnore.includes(tag)).sort();container.innerHTML='';const tagButtonsHTML=allTags.map(tag=>{const tagName=tag.charAt(0).toUpperCase()+tag.slice(1).replace(/_/g,' ');return`<button class="static-tag-button" data-tag="${tag}">
                    ${tagName}
                </button>`;}).join('');container.innerHTML=tagButtonsHTML;container.addEventListener('click',(event)=>{const button=event.target.closest('.static-tag-button');if(button&&button.dataset.tag){const searchInput=document.getElementById('tagSearchInput');const currentTags=searchInput.value.split(',').map(t=>t.trim()).filter(Boolean);const clickedTag=button.dataset.tag;if(currentTags.includes(clickedTag)){const newTags=currentTags.filter(tag=>tag!==clickedTag);searchInput.value=newTags.join(', ');button.classList.remove('selected');}else{currentTags.push(clickedTag);searchInput.value=currentTags.join(', ');button.classList.add('selected');}}});}
function handleSearch(){const searchInput=document.getElementById('tagSearchInput');const query=searchInput.value.trim().toLowerCase();if(!query){renderAllAlphabetical();updateMapMarkers();return;}
const searchTerms=query.split(',').map(term=>term.trim().toLowerCase()).filter(Boolean);const filteredRestaurants=restaurants.filter(restaurant=>{const restaurantTags=(restaurant.tags||[]).map(t=>t.toLowerCase());return searchTerms.some(term=>restaurantTags.includes(term));});renderSearchResults(filteredRestaurants,query);updateMapMarkers(filteredRestaurants);}
function renderSearchResults(results,query){const container=document.getElementById('categoryContainer');if(!container)return;container.innerHTML='';const viewToggleSection=document.getElementById('viewToggleSection');if(viewToggleSection){viewToggleSection.classList.remove('hidden');}
const section=document.createElement('div');section.className='animate-slide-up';if(results.length>0){section.innerHTML=`
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-white mb-4">Search Results for "${query}"</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${results.map(restaurant=>createRestaurantCard(restaurant)).join('')}
            </div>
        `;}else{section.innerHTML=`
            <div class="text-center py-16 animate-fade-in">
                <h2 class="text-3xl font-bold text-white mb-4">No Results Found</h2>
                <p class="text-xl text-gray-300">We couldn't find any restaurants matching "${query}".</p>
            </div>
        `;}
container.appendChild(section);}
function updateMapMarkers(restaurantsToShow){if(!map)return;mapMarkers.forEach(marker=>map.removeLayer(marker));mapMarkers=[];if(!restaurantsToShow){restaurantsToShow=!currentFilter||currentFilter==='all'
?restaurants:restaurants.filter(r=>r.tags&&r.tags.includes(currentFilter));}
restaurantsToShow.forEach(restaurant=>{if(restaurant.lat&&restaurant.lng){const imageUrl=restaurant.imageURL||'https://placehold.co/64x64/1e293b/ffffff?text=N/A';const marker=L.marker([restaurant.lat,restaurant.lng]).bindPopup(`
                    <div class="p-4 min-w-64">
                        <div class="flex items-center space-x-3 mb-3">
                            <img src="${imageUrl}" alt="${restaurant.name}" class="w-16 h-16 rounded-lg object-cover" onerror="this.src='https://placehold.co/64x64/1e293b/ffffff?text=N/A'; this.onerror=null;">
                            <div>
                                <h3 class="font-bold text-gray-900">${restaurant.name}</h3>
                                <div class="flex items-center space-x-1">
                                    <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <span class="text-sm text-gray-600">${restaurant.rating||'N/A'}</span>
                                    <span class="text-sm text-gray-400">•</span>
                                    <span class="text-sm text-gray-600">${restaurant.priceRange||''}</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mb-3">${(restaurant.description||'').substring(0,100)}...</p>
                        <button onclick="openRestaurantModal(${restaurant.id})" class="w-full px-4 py-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-200">
                            View Details
                        </button>
                    </div>
                `);marker.addTo(map);mapMarkers.push(marker);}});}
function initializeMap(){const mapElement=document.getElementById('map');if(!mapElement)return;try{map=L.map('map',{zoomControl:false}).setView([59.6426,-151.5377],12);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);L.control.zoom({position:'topright'}).addTo(map);}catch(error){console.error('Map initialization failed:',error);}}
async function handleLogin(email,password){if(typeof supabase==='undefined'){alert('Database connection not available');return;}
const{data,error}=await supabase.auth.signInWithPassword({email:email,password:password,});if(error){alert('Login failed: '+error.message);}else{currentUser=data.user;updateAuthUI();closeAuthModal();await loadUserFavorites();renderAllAlphabetical();}}
async function handleSignup(email,password,fullName){if(typeof supabase==='undefined'){alert('Database connection not available');return;}
const{data,error}=await supabase.auth.signUp({email:email,password:password,options:{data:{full_name:fullName,}}});if(error){alert('Signup failed: '+error.message);}else{alert('Please check your email to confirm your account!');closeAuthModal();}}
async function handlePasswordReset(email){if(typeof supabase==='undefined'){alert('Database connection not available');return;}
const{data,error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:window.location.href,});if(error){alert('Error: '+error.message);}else{alert('Password reset link sent! Please check your email.');closeAuthModal();}}
async function loadRestaurantsFromSupabase(){if(typeof supabase==='undefined'){console.log('Supabase not available, using static data');restaurants=getStaticRestaurants();return;}
try{const{data,error}=await supabase.from('restaurants').select('*').eq('status','approved');if(error)throw error;restaurants=data.map(restaurant=>({id:restaurant.id,name:restaurant.name,description:restaurant.description,address:restaurant.address,phone:restaurant.phone,website:restaurant.website,hours:restaurant.hours,imageURL:restaurant.image_url,lat:restaurant.lat,lng:restaurant.lng,menu:restaurant.menu_url,tags:restaurant.tags||[],rating:restaurant.rating,priceRange:restaurant.price_range}));console.log('Loaded',restaurants.length,'restaurants from Supabase');}catch(error){console.error('Error loading restaurants:',error);restaurants=getStaticRestaurants();console.log('Using fallback static data');}}
async function submitRestaurant(formData){if(typeof supabase==='undefined'){alert('Database connection not available');return false;}
if(!currentUser){alert('Please log in to submit a restaurant');return false;}
try{let imageUrl=null;const imageFile=formData.get('restaurantImage');if(imageFile&&imageFile.size>0){const fileName=`${Date.now()}-${imageFile.name}`;const{data:uploadData,error:uploadError}=await supabase.storage.from('restaurant-images').upload(fileName,imageFile);if(uploadError)throw uploadError;const{data:{publicUrl}}=supabase.storage.from('restaurant-images').getPublicUrl(fileName);imageUrl=publicUrl;}
const{data,error}=await supabase.from('restaurant_submissions').insert([{name:formData.get('restaurantName'),description:formData.get('restaurantDescription')||'',address:formData.get('restaurantAddress')||'',website:formData.get('restaurantWebsite')||'',submitted_by:currentUser.id,image_file_name:imageUrl}]);if(error)throw error;alert('Thank you for your submission! It will be reviewed by our team.');return true;}catch(error){console.error('Error submitting restaurant:',error);alert('Error submitting restaurant: '+error.message);return false;}}
function setupSubmissionForm(){const form=document.getElementById('submissionForm');if(form){const nameField=form.querySelector('input[name="restaurantName"]');if(nameField&&!form.querySelector('textarea[name="restaurantDescription"]')){const descriptionDiv=document.createElement('div');descriptionDiv.innerHTML=`
                <label for="restaurantDescription" class="block text-sm font-medium text-gray-300">Description</label>
                <textarea id="restaurantDescription" name="restaurantDescription" rows="3" 
                    class="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm"
                    placeholder="Brief description of the restaurant..."></textarea>
            `;nameField.parentElement.after(descriptionDiv);}
form.addEventListener('submit',async function(e){e.preventDefault();if(typeof supabase==='undefined'){alert('Database connection not available. Please try again later.');return;}
if(!currentUser){alert('Please log in to submit a restaurant');showAuthModal('login');return;}
const formData=new FormData(form);const submitButton=form.querySelector('button[type="submit"]');const originalButtonText=submitButton.innerHTML;submitButton.disabled=true;submitButton.innerHTML='Submitting...';const success=await submitRestaurant(formData);if(success){form.reset();closeSubmissionModal();}
submitButton.disabled=false;submitButton.innerHTML=originalButtonText;});}}
function setupRandomButton(){const randomBtn=document.getElementById('randomRestaurantBtn');if(randomBtn){randomBtn.addEventListener('click',function(){if(restaurants.length>0){const randomIndex=Math.floor(Math.random()*restaurants.length);const randomRestaurant=restaurants[randomIndex];openRestaurantModal(randomRestaurant.id);}});}}
function setupViewToggle(){const gridBtn=document.getElementById('gridViewBtn');const mapBtn=document.getElementById('mapViewBtn');const gridContent=document.getElementById('gridContent');const mapContent=document.getElementById('mapContent');if(!gridBtn||!mapBtn)return;gridBtn.addEventListener('click',function(){gridBtn.className='glow-button glow-button-blue';mapBtn.className='glow-button glow-button-gray';if(gridContent)gridContent.classList.remove('hidden');if(mapContent)mapContent.classList.add('hidden');});mapBtn.addEventListener('click',function(){mapBtn.className='glow-button glow-button-blue';gridBtn.className='glow-button glow-button-gray';if(mapContent)mapContent.classList.remove('hidden');if(gridContent)gridContent.classList.add('hidden');setTimeout(()=>{if(map){map.invalidateSize();map.setView([59.6426,-151.5377],12);updateMapMarkers();}},100);});}
function openRestaurantModal(restaurantId){const restaurant=restaurants.find(r=>r.id===restaurantId);if(!restaurant)return;const modal=document.getElementById('restaurantModal');const modalContent=document.getElementById('modalContent');if(!modal||!modalContent)return;const tags=restaurant.tags||[];const tagsDisplay=tags.map(tag=>tag.charAt(0).toUpperCase()+tag.slice(1)).join(' • ');const imageUrl=restaurant.imageURL||'https://placehold.co/600x250/1e293b/ffffff?text=Image+Not+Found';modalContent.innerHTML=`
        <div class="relative">
            <img src="${imageUrl}" alt="${restaurant.name}" class="w-full h-64 object-cover" onerror="this.src='https://placehold.co/600x250/1e293b/ffffff?text=Image+Not+Found'; this.onerror=null;">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-16">
                <h1 class="text-3xl font-bold text-white mb-2">${restaurant.name}</h1>
                <div class="flex items-center space-x-4 text-white">
                    <div class="flex items-center space-x-1">
                        <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <span class="font-medium">${restaurant.rating||'N/A'}</span>
                    </div>
                    <span class="font-medium">${restaurant.priceRange||''}</span>
                </div>
                 <p class="text-white text-sm mt-2">${tagsDisplay}</p>
            </div>
        </div>
        <div class="p-8">
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">${restaurant.description}</p>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                        <div><h3 class="font-semibold text-gray-900">Address</h3><p class="text-gray-600">${restaurant.address||'Address not available'}</p></div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                        <div><h3 class="font-semibold text-gray-900">Phone</h3><a href="tel:${restaurant.phone}" class="text-brand-600 hover:text-brand-700">${restaurant.phone||'Phone not available'}</a></div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                        <div><h3 class="font-semibold text-gray-900">Hours</h3><p class="text-gray-600">${restaurant.hours||'Hours not available'}</p></div>
                    </div>
                    ${(restaurant.website&&restaurant.website!=='nan')?`<div class="flex items-start space-x-3"><div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c5 0 9-4 9-9s-4-9-9-9"></path></svg></div><div><h3 class="font-semibold text-gray-900">Website</h3><a href="${restaurant.website}" target="_blank" class="text-brand-600 hover:text-brand-700">Visit Website</a></div></div>`:''}
                </div>
            </div>
            ${(restaurant.menu&&restaurant.menu!=='nan')?`<div class="bg-gray-50 rounded-2xl p-6 mb-6"><h3 class="font-bold text-gray-900 mb-3 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>Menu</h3><a href="${restaurant.menu}" target="_blank" class="text-brand-600 hover:text-brand-700">View Menu</a></div>`:''}
            <div class="flex flex-wrap gap-2">${tags.map(tag=>`<span class="px-4 py-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-700 font-medium rounded-xl">${tag}</span>`).join('')}</div>
        </div>
    `;modal.classList.remove('hidden');document.body.style.overflow='hidden';}
function closeRestaurantModal(){const modal=document.getElementById('restaurantModal');if(modal){modal.classList.add('hidden');document.body.style.overflow='';}}
function openSubmissionModal(){const modal=document.getElementById('submissionModal');if(modal){modal.classList.remove('hidden');document.body.style.overflow='hidden';}}
function closeSubmissionModal(){const modal=document.getElementById('submissionModal');if(modal){modal.classList.add('hidden');document.body.style.overflow='';}}
function showAuthModal(type){closeAuthModal();let modalContentHTML='';const inputClasses="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white focus:outline-none focus:ring-accent-500 focus:border-accent-500";const linkClasses="text-blue-400 hover:text-blue-300";if(type==='login'){modalContentHTML=`
            <h2 class="text-2xl font-bold mb-6 text-white">Login</h2>
            <form id="authForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" name="email" required class="${inputClasses}">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-300">Password</label>
                    <input type="password" name="password" required class="${inputClasses}">
                    <div class="text-right mt-2">
                        <button type="button" onclick="showAuthModal('reset_password')" class="text-sm ${linkClasses}">Forgot Password?</button>
                    </div>
                </div>
                <button type="submit" class="glow-button glow-button-blue w-full">Login</button>
            </form>
            <p class="text-center mt-4 text-gray-400">
                Don't have an account? <button onclick="showAuthModal('signup')" class="${linkClasses}">Sign Up</button>
            </p>
        `;}else if(type==='signup'){modalContentHTML=`
            <h2 class="text-2xl font-bold mb-6 text-white">Sign Up</h2>
            <form id="authForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-300">Full Name</label>
                    <input type="text" name="fullName" required class="${inputClasses}">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" name="email" required class="${inputClasses}">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-300">Password</label>
                    <input type="password" name="password" required class="${inputClasses}">
                </div>
                <button type="submit" class="glow-button glow-button-blue w-full">Sign Up</button>
            </form>
            <p class="text-center mt-4 text-gray-400">
                Already have an account? <button onclick="showAuthModal('login')" class="${linkClasses}">Login</button>
            </p>
        `;}else if(type==='reset_password'){modalContentHTML=`
            <h2 class="text-2xl font-bold mb-6 text-white">Reset Password</h2>
            <p class="text-gray-300 mb-4">Enter your email and we'll send a link to reset your password.</p>
            <form id="authForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" name="email" required class="${inputClasses}">
                </div>
                <button type="submit" class="glow-button glow-button-blue w-full">Send Reset Link</button>
            </form>
            <p class="text-center mt-4 text-gray-400">
                Remember your password? <button onclick="showAuthModal('login')" class="${linkClasses}">Login</button>
            </p>
        `;}
const modalHTML=`
        <div id="authModal" class="fixed inset-0 z-50">
            <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" onclick="closeAuthModal()"></div>
            <div class="fixed inset-0 flex items-center justify-center p-4">
                <div class="popup-border-wrap rounded-3xl shadow-2xl max-w-md w-full animate-scale-in">
                    <div class="backdrop-blur-2xl bg-slate-800/50 rounded-3xl relative p-8">
                        <button onclick="closeAuthModal()" class="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        ${modalContentHTML}
                    </div>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML('beforeend',modalHTML);const form=document.getElementById('authForm');form.addEventListener('submit',async(e)=>{e.preventDefault();const formData=new FormData(form);const email=formData.get('email');const password=formData.get('password');const fullName=formData.get('fullName');if(type==='login'){await handleLogin(email,password);}else if(type==='signup'){await handleSignup(email,password,fullName);}else if(type==='reset_password'){await handlePasswordReset(email);}});}
function closeAuthModal(){const modal=document.getElementById('authModal');if(modal)modal.remove();}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(!document.getElementById('submissionModal')?.classList.contains('hidden')){closeSubmissionModal();}else if(document.getElementById('authModal')){closeAuthModal();}else{closeRestaurantModal();}}});
if(typeof supabase!=='undefined'){supabase.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_IN'){currentUser=session.user;updateAuthUI();}else if(event==='SIGNED_OUT'){currentUser=null;updateAuthUI();}});
}
