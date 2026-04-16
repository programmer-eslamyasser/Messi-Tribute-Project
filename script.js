document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DATA STRUCTURE: Messi Moments Array (Epic Detailed Articles + YouTube Links)
    const messiMoments = [
        { 
            id: 1, 
            title: "World Cup 2022", 
            image: "./img/Mesi_2.png", 
            shortDescription: "THE MOMENT FOOTBALL WAITED FOR", 
            fullDescription: `
                <p>On the legendary night of December 18, 2022, inside the luminous Lusail Stadium in Qatar, football found its poetic justice. The FIFA World Cup Final between Argentina and France wasn't just a match; it was an emotional rollercoaster, widely considered the greatest final in the history of the sport.</p>
                
                <p>Lionel Messi, bearing the weight of an entire nation and the desperate hopes of millions across the globe, delivered a masterclass. He opened the scoring with a cold-blooded penalty, later scrambling home a dramatic extra-time goal when Argentina needed him most. Even as Kylian Mbappé threatened to steal the script with a brilliant hat-trick, Messi remained the unbreakable anchor of his team.</p>
                
                <p>When the final whistle of the penalty shootout blew, Messi sank to his knees, swallowed by an ocean of teammates. Draped in the traditional Qatari bisht, lifting the golden trophy into the Doha sky, he didn't just win a tournament. He completed football. He cemented his legacy not just as the defining player of his generation, but as the undisputed greatest footballer of all time, fulfilling a lifelong dream born in the streets of Rosario.</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+world+cup+2022+final+highlights"
        },
        { 
            id: 2, 
            title: "Copa America 2021", 
            image: "./img/Mesi_6.png", 
            shortDescription: "TEARS OF GLORY", 
            fullDescription: `
                <p>July 10, 2021, etched a deeply emotional chapter into South American football lore. For Lionel Messi, the international stage had long been a theater of heartbreak. After agonizingly losing four major finals (three Copa Americas and one World Cup) and even temporarily retiring from the national team out of sheer despair, the narrative seemed cursed.</p>
                
                <p>But destiny had an appointment at the iconic Maracanã Stadium. Facing their fiercest historical rivals, Brazil, in their own backyard, Argentina fought with the spirit of gladiators. Ángel Di María’s sublime lob secured a 1-0 victory, ending a grueling 28-year major trophy drought for La Albiceleste.</p>
                
                <p>The defining image of the tournament wasn't a goal, but the exact moment the final whistle blew. Messi immediately fell to his knees, burying his face in his hands, sobbing uncontrollably. Within seconds, his teammates didn't celebrate with each other; they rushed completely toward him, piling on top of their captain. The curse was broken. The weight of an entire country had finally been lifted off his shoulders.</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+crying+copa+america+2021+final+whistle"
        },
        { 
            id: 3, 
            title: "Bernabeu 2017", 
            image: "./img/Mesi_5.png", 
            shortDescription: "THIS IS WHO I AM", 
            fullDescription: `
                <p>April 23, 2017. El Clásico at the Santiago Bernabéu. The stage was set for a blood-and-thunder clash that would decide the fate of the La Liga title race. It was a fiercely physical match; early in the game, an elbow strike left Messi spitting blood, forcing him to play with a tissue in his mouth.</p>
                
                <p>With the game tied at 2-2, 10-man Real Madrid pushed forward for a winner, but as the clock ticked into the 92nd minute, Sergi Roberto launched a desperate counter-attack. The ball was driven down the left flank to Jordi Alba, who cut it back precisely to the edge of the box. Arriving with terrifying inevitability was Lionel Messi.</p>
                
                <p>With a sweeping, surgical left-footed finish, he curled the ball past Keylor Navas, silencing the Madrid crowd instantly. It wasn't just a last-second winner; it was his 500th career goal for Barcelona. He calmly took off his number 10 shirt, walked to the furious Bernabéu stands, and held it up for them to see. An iconic, freezing-in-time celebration that screamed louder than words: "Remember the name."</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+goal+vs+real+madrid+2017+arabic+commentary"
        },
        { 
            id: 4, 
            title: "Ballon d'Or", 
            image: "./img/Mesi_4.png", 
            shortDescription: "HISTORY IN ONE FRAME", 
            fullDescription: `
                <p>The Ballon d'Or and Lionel Messi share a romantic history unlike anything the sporting world has ever witnessed. Winning the most prestigious individual award in football a record-breaking eight times, Messi's absolute dominance spans multiple entirely different eras of the modern game.</p>
                
                <p>From his very first win in 2009 as a long-haired, lightning-fast 22-year-old winger, to his eighth in 2023 as a wise, World Cup-winning playmaker and captain, these golden trophies map his extraordinary evolution. Over the years, he transformed from a pure dribbler to a false nine, and eventually to the greatest playmaker in history, mastering every attacking facet of the sport.</p>
                
                <p>Standing beside his vast collection is a visual representation of alien-like talent meeting relentless, unwavering consistency. The sheer statistical absurdity of being named the best player in the world across three different decades makes this frame a true, untouchable monument to greatness. It is a record that may never, ever be broken.</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+8th+ballon+d+or+speech"
        },
        { 
            id: 5, 
            title: "Getafe 2007", 
            image: "./img/Mesi_3.png", 
            shortDescription: "MAGIC HAS A NAME", 
            fullDescription: `
                <p>April 18, 2007. The day a 19-year-old boy from Rosario proved to the globe that he wasn't just a promising prodigy, but the literal second coming of Diego Armando Maradona. In a Copa del Rey semi-final against Getafe, Messi picked up the ball from Xavi deep inside his own half, near the right touchline.</p>
                
                <p>What followed were 14 seconds of pure, unadulterated sorcery. Taking 13 magical touches, Messi accelerated with the ball glued to his left boot. He bypassed two players immediately, nutmegged another, glided past the defensive line, rounded the sprawling goalkeeper, and slotted the ball into the net from an impossibly tight angle with his right foot.</p>
                
                <p>The Camp Nou erupted in sheer disbelief. Frame by frame, it was an almost exact carbon copy of Maradona's famous "Goal of the Century" against England in the 1986 World Cup. That singular, devastating run was the exact moment the world realized that Lionel Messi was capable of doing the impossible on a football pitch.</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+ankara+goal+vs+getafe+2007"
        },
        { 
            id: 6, 
            title: "UCL Final 2009", 
            image: "./img/Mesi_8.png", 
            shortDescription: "GREATNESS FINDS A WAY", 
            fullDescription: `
                <p>May 27, 2009. The Stadio Olimpico in Rome played host to a defining Champions League Final between Pep Guardiola’s revolutionary Barcelona and Sir Alex Ferguson’s formidable Manchester United. The pre-match narrative was heavy: critics claimed Messi couldn't score against English teams, and at 5 foot 7, he certainly couldn't score headers against towering defenders like Rio Ferdinand and Nemanja Vidić.</p>
                
                <p>In the 70th minute, Xavi Hernandez spotted a pocket of space and delivered a pinpoint cross into the box. Messi, the smallest man on the pitch, leapt into the air. Defying gravity, he seemed to hang in the sky for an eternity, executing a spectacular looping header that floated beautifully over the helplessly stranded Edwin van der Sar.</p>
                
                <p>The force of the jump was so immense that as he landed, his right boot flew off. He ran to the corner flag, kissing his detached boot in a wild, euphoric celebration. That iconic goal secured Barcelona's historic treble and officially crowned Messi as the new king of European football.</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+header+goal+vs+manchester+united+2009+champions+league+final"
        },
        { 
            id: 7, 
            title: "Messi × Ronaldo", 
            image: "./img/Mesi_7.png", 
            shortDescription: "TWO LEGENDS — ONE ERA", 
            fullDescription: `
                <p>Captured by legendary photographer Annie Leibovitz just days before the kickoff of the 2022 World Cup, this image of Lionel Messi and Cristiano Ronaldo locked in a quiet, intense game of chess over a Louis Vuitton briefcase instantly broke the internet, becoming one of the most iconic sports photographs in history.</p>
                
                <p>It perfectly encapsulates the defining sporting rivalry of the 21st century. For nearly two decades, these two titans pushed each other to absolutely impossible heights. They broke every scoring record imaginable, hoarded Ballons d'Or, and divided football fans into two passionate camps. The chessboard in the photo was actually set up to mirror a famous real-life chess match that ended in a draw, symbolizing that neither can truly erase the greatness of the other.</p>
                
                <p>This image is a profound tribute to their mutual respect and their tactical brilliance. It serves as a beautiful, artistic reminder that we, as fans, were privileged enough to witness the two greatest players of all time sharing the exact same era, elevating the beautiful game to unprecedented levels.</p>
            `,
            youtubeLink: "https://www.youtube.com/results?search_query=messi+ronaldo+louis+vuitton+behind+the+scenes"
        }
    ];

    // 2. DYNAMICALLY RENDER GALLERY
    const galleryContainer = document.getElementById('gallery-container');
    
    if (galleryContainer) {
        messiMoments.forEach((moment, index) => {
            const delay = index * 100; // Staggered animation delay
            const itemHTML = `
                <div class="gallery-item fade-in" style="transition-delay: ${delay}ms;">
                    <img src="${moment.image}" alt="${moment.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <div class="item-text">
                            <h3>${moment.title}</h3>
                            <hr>
                            <p>${moment.shortDescription}</p>
                            <button class="btn-details" data-id="${moment.id}">VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            `;
            galleryContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Event Delegation for "View Details" buttons
        galleryContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-details')) {
                const momentId = parseInt(e.target.dataset.id);
                const selectedData = messiMoments.find(m => m.id === momentId);
                
                // Store in localStorage and redirect
                localStorage.setItem('selectedMoment', JSON.stringify(selectedData));
                window.location.href = 'details.html';
            }
        });
    }

    // 3. SCROLL ANIMATIONS (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => scrollObserver.observe(el));

    // 4. SCROLL TO TOP BUTTON & SMOOTH SCROLLING
    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 5. FORM VALIDATION & STORAGE
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const clearBtn = document.getElementById('clearFormBtn');
    const toast = document.getElementById('toast');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(input, condition) {
        const parent = input.closest('.input-group');
        if (condition) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            parent.classList.remove('error');
            return true;
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            parent.classList.add('error');
            return false;
        }
    }

    // Real-time validation
    if(contactForm) {
        nameInput.addEventListener('input', () => validateField(nameInput, nameInput.value.trim().length > 0));
        emailInput.addEventListener('input', () => validateField(emailInput, emailRegex.test(emailInput.value.trim())));
        messageInput.addEventListener('input', () => validateField(messageInput, messageInput.value.trim().length > 0));

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isNameValid = validateField(nameInput, nameInput.value.trim().length > 0);
            const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
            const isMsgValid = validateField(messageInput, messageInput.value.trim().length > 0);

            if (isNameValid && isEmailValid && isMsgValid) {
                const newMessage = {
                    id: Date.now(),
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim(),
                    date: new Date().toLocaleString()
                };

                let messages = JSON.parse(localStorage.getItem('messiTributeMessages')) || [];
                messages.push(newMessage);
                localStorage.setItem('messiTributeMessages', JSON.stringify(messages));

                showToast();
                contactForm.reset();
                [nameInput, emailInput, messageInput].forEach(input => {
                    input.classList.remove('valid', 'invalid');
                    input.closest('.input-group').classList.remove('error');
                });
            }
        });

        clearBtn.addEventListener('click', () => {
            contactForm.reset();
            [nameInput, emailInput, messageInput].forEach(input => {
                input.classList.remove('valid', 'invalid');
                input.closest('.input-group').classList.remove('error');
            });
        });
    }

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});