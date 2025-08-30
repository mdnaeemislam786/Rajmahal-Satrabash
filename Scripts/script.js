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