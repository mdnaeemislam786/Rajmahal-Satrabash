      document.addEventListener('DOMContentLoaded', function() {
        // Simple counter animation for stats
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            const inc = target / speed;
            
            if(count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          }
          updateCount();
        });
      });

    document.getElementById('openMenu').addEventListener("click", function(){
        document.getElementById('mobile-menu').style.display = "block"
        document.getElementById('closeMenu').style.display = "block"
        document.getElementById('openMenu').style.display = "none"
    })

    document.getElementById('closeMenu').addEventListener("click", function(){
        document.getElementById('mobile-menu').style.display = "none"
        document.getElementById('closeMenu').style.display = "none"
        document.getElementById('openMenu').style.display = "block"
    }) 



// Handle avatar upload preview
document.getElementById('avatarUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('avatarPreview').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// ================================================
// Comment form functionality of About Page
// =================================================
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const commentText = document.getElementById('comment').value;
    const rating = document.querySelector('input[name="rating-11"]:checked').value;
    const avatarSrc = document.getElementById('avatarPreview').src;
    
    // Create new comment element
    const commentElement = document.createElement('div');
    commentElement.className = 'bg-white shadow-md rounded-lg p-6 mb-6';
    commentElement.innerHTML = `
        <div class="flex items-center mb-4">
            <img src="${avatarSrc}" alt="${name}'s Avatar" class="w-12 h-12 rounded-full object-cover">
            <div class="ml-4">
                <h4 class="text-lg font-bold">${name}</h4>
                <p class="text-gray-500">${course} Student</p>
            </div>
        </div>
        <p class="text-gray-700 mb-4">${commentText}</p>
        <div class="flex justify-between items-center">
            <div class="rating rating-md rating-half">
                ${generateStarRating(rating)}
            </div>
            <div class="text-right text-gray-500 text-sm">Just now</div>
        </div>
    `;
    
    // Add new comment to the top of comments container
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.appendChild(commentElement);
    
    // Reset form but keep the uploaded image
    document.getElementById('commentForm').reset();
    
    // Show success message
    alert('Thank you for your comment!');
});

// Function to generate star rating HTML
function generateStarRating(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += '<input type="radio" name="rating-' + Math.random() + '" class="bg-green-500 mask mask-star-2 mask-half-2" checked disabled/>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += '<input type="radio" name="rating-' + Math.random() + '" class="bg-green-500 mask mask-star-2 mask-half-1" checked disabled/>';
        } else {
            starsHtml += '<input type="radio" name="rating-' + Math.random() + '" class="bg-green-500 mask mask-star-2 mask-half-1" disabled/>';
        }
    }
    
    return starsHtml;
}

// Add some sample comments initially
const sampleComments = [
    {
        name: "Shakil Ahmed",
        course: "EMT",
        comment: "I've been staying here for two years now. The management is very responsive and the facilities are well-maintained. Highly recommended!",
        rating: 4.5,
        avatar: "./Assets/sh.jpg"
    },
    {
        name: "Md Musfiqur",
        course: "EMT",
        comment: "The study environment here is perfect. No distractions during exam periods and the internet is reliable for online classes.",
        rating: 5,
        avatar: "./Assets/user.png"
    }
];

const commentsContainer = document.getElementById('commentsContainer');

sampleComments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.className = 'bg-white shadow-md rounded-lg p-6 mb-6';
    commentElement.innerHTML = `
        <div class="flex items-center mb-4">
            <img src="${comment.avatar}" alt="${comment.name}'s Avatar" class="w-12 h-12 rounded-full">
            <div class="ml-4">
                <h4 class="text-lg font-bold">${comment.name}</h4>
                <p class="text-gray-500">${comment.course} Student</p>
            </div>
        </div>
        <p class="text-gray-700 mb-4">${comment.comment}</p>
        <div class="flex justify-between items-center">
            <div class="rating rating-md rating-half">
                ${generateStarRating(comment.rating)}
            </div>
            <div class="text-right text-gray-500 text-sm">2 days ago</div>
        </div>
    `;
    
    commentsContainer.appendChild(commentElement);
});