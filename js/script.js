// AZIONE: Inizializzo il js per applicare Vue js e Axios 
let app = new Vue({

    // AZIONE: Assegno l'id 
	el: '#Container-generale',
    //END AZIONE: Assegno l'id 

    // AZIONE: Inizializzo le variabili 
	data: {
        navBar:[
            {
                type: 'Home',
                menu: ['Home examp','Examp','Examp']
            },
            {
                type:'Pages',
                menu: ['Pages examp','Examp','Examp','Examp']
            },
            {
                type: 'Courses',
                menu: ['Courses examp','Courses examp','Examp']
            },
            {
                type: 'Features',
                menu: ['features Examp','Examp','Examp']
            },
            {
                type: 'Blog',
                menu: ['Blog examp','Examp','Examp']
            },
            {
                type: 'Shop',
                menu:['Shop examp','Examp','Examp']
            }
        ],
        numberInfo:[
            {
                numero: 1926,
                info:'FINISHED SESSIONS'
            },
            {
                numero: '3092+',
                info:'ENROLLED LEARNERS'
            },
            {
                numero: 200,
                info:'ONLINE INSTRUCTORS'
            },
            {
                numero: '100%',
                info:'SATISFACTION RATE'
            }
        ],
        checks:['Select & customize courses to your preferences','Change the tutor and make arrangements','Participate in events to join others','Get the desired certificate delivered at house'],
        courses:[
            {
                price: '$40.00',
                info: 'Learning to Write as a Professional Author',
                infoCourse: ['20 Lessons','50 Students'],
                img: 'course-02-480x298.jpg'
            },
            {
                price: 'Free',
                info: 'Customer-centric info-Tech Strategies',
                infoCourse: ['24 Lessons','769 Students'],
                img: 'stock-full-hd-03-480x298.jpg'
            },
            {
                price: '$19.00',
                info: 'Open Programming Courses for Everyone: Python',
                infoCourse: ['17 Lessons','62 Students'],
                img: 'stock-full-hd-04-480x298.jpg'
            },
            {
                price: '$26.00',
                info: 'Academic Listening and Note-taking',
                infoCourse: ['14 Lessons','67 Students'],
                img: 'stock-full-hd-06-480x298.jpg'
            },
            {
                price: '$39.00',
                info: 'Master jQuery in a short Period ',
                infoCourse: ['6 Lessons','51 Students'],
                img: 'course-featured-image-01-480x298.jpg'
            },
            {
                price: '$59.00',
                info: 'Introduction to Javascript for Beginners',
                infoCourse: ['14 Lessons','76 Students'],
                img: 'stock-full-hd-05-480x298.jpg'
            }
        ],
        testimonial: [
            {
                name:'UZZAL HOSSAIN',
                title: '/ Front-end Developer',
                info: 'i am happy with their arrangement of lessons and subjects. they reflect a scientific investigation.',
                photo: 'testimonial-avata-01.jpg'
            },
            {
                name:'NINA HOLLACE',
                title: '/Freelancer',
                info: 'I am free to learn at my own pace, follow my own schedule and choose the subject i like. Great study portal fro people like me.',
                photo: 'testimonial-avata-02.jpg'
            }
        ],
        clients: ['client-logo-colored-01.png', 'client-logo-colored-02.png', 'client-logo-colored-03.png', 'client-logo-colored-04.png', 'client-logo-colored-05.png', 'client-logo-colored-06.png'],
        blogs: [
            {
                img: 'artist-blog-03-480x325.jpeg',
                class: 'ARTIS',
                info: 'Brush Strokes Energize Trees in Paintings',
                view: [' Feb 17, 2021', ' 688 views']
            },
            {
                img: 'artist-blog-01-480x325.jpg',
                class: 'ARTIS',
                info: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                view: [' Feb 17, 2021', ' 603 views']
            },
            {
                img: 'artist-blog-02-480x325.jpg',
                class: 'ARTIS',
                info: 'Connection Between Self-portraits and Identity',
                view: [' Feb 17, 2021', ' 397 views']
            }
        ],
        linkHelps: [
            {
                icon:'far fa-flag',
                type: 'Idea Discussion',
                info: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
            },
            {
                icon:'fas fa-cog',
                type: 'Web Development',
                info: 'Learn to start building a wabpage from scratch. You decide your own pace, course and speed.'
            },
            {
                icon:'far fa-life-ring',
                type: 'System Administration',
                info: 'Learners are encouraged to study the mechanism and structure of system administration.'
            },
            {
                icon:'fas fa-tv',
                type: 'Graphic Design',
                info: 'Have a passion for graphics and arts? Show your talents whit confidence and self-assertiveness'
            },
        ],
        infoFooter: [
            {
                id: 'Address',
                address: ['382 NE 191st ST # 87394 Miami, FL 33179-3899', '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)', 'support@maxcoach.com']
            },
            {
                id: 'Explore',
                address: ['Start here', 'Blog', 'About us']
            },
            {
                id: '',
                address: ['Success story', 'Courses', 'Contact us']
            },
            {
                id: 'Information',
                address: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of services']
            }
        ],
        iconsSocial: ['fab fa-facebook-square', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-linkedin'],
        position: 0,
        counter: null,
        intervalDown : '',
        myClass:'hide'
	},
    //END AZIONE: Inizializzo le variabili 

	// AZIONI: Azioni eseguite senza necessita di azionare un comando 
	created(){
        //AZIONE: creo un comando con un cambio testimonial ogni 5 secondi 
        this.intervalDown = setInterval(this.next, 5000);
    },
	//END AZIONI: Azioni eseguite senza necessita di azionare un comando 

	// AZIONI: Eseguite dopo un determinato comando (click/key/ecc)
	methods: {
        //AZIONE: Funzione di scambio testimonial 
        next(){
            (this.position == this.testimonial.length - 1) ? this.position = 0 : this.position++
        },
        // END AZIONE: Funzione di scambio testimonial 

        // AZIONE: Apertura del menu nav bar 
        openMenù(index){
            (this.counter == index) ? this.counter = null : this.counter = index; 
        }
        // END AZIONE: Apertura del menu nav bar 

	}
	//END AZIONI: Eseguite dopo un determinato comando (click/key/ecc)

});
//END AZIONE: Inizializzo il js per applicare Vue js e Axios 