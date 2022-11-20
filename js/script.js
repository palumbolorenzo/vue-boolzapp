new Vue({
    el: '#app',
    data: {
        contacts: [ 
        {
            name: 'Michele',
            avatar: '_1',
            id: 2,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                }, 
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }, 
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            id: 3,
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }, 
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            id: 4,
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                }, 
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                }, 
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }, 
            ],
        }, 
        {
            name: 'Alessandro B.',
            avatar: '_4',
            id: 5,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                }, 
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }, 
            ],
        }, 
        {
            name: 'Alessandro L.',
            avatar: '_5',
            id: 6,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        }, 
        {
            name: 'Claudia',
            avatar: '_6',
            id: 7,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                }, 
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                }, 
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                },
            ],
        }, 
        {
            name: 'Federico',
            avatar: '_7',
            id: 8,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                }, 
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }, 
            ],
        }, 
        {
            name: 'Davide',
            avatar: '_8',
            id: 9,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        },
        ],
        activeIndex: 0,
        newMessage: '',
    },

    methods: {
        setActiveIndex(index){
            this.activeIndex = index;
        },
        sendMessage(){
            this.contacts[this.activeIndex].messages.push({
                message: this.newMessage,
                status: 'sent',
            });
            this.newMessage = '';
        },
        
        dark() {
            document.getElementById('dm').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        light() {
            document.getElementById('dm').classList.remove('dark-mode')
            this.darkMode = false
            this.$emit('light')
        },
        modeToggle() {
            if(this.darkMode || document.getElementById('dm').classList.contains('dark-mode')) {
                this.light()
            } else {
                this.dark()
            }
        },
        /*
        dark1() {
            document.getElementById('dm1').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark2() {
            document.getElementById('dm2').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark3() {
            document.getElementById('dm3').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark4() {
            document.getElementById('dm4').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark5() {
            document.getElementById('dm5').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark6() {
            document.getElementById('dm6').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark7() {
            document.getElementById('dm7').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark8() {
            document.getElementById('dm8').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark9() {
            document.getElementById('dm9').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        dark10() {
            document.getElementById('dm10').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },
        */
    },
    
    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    }
});

