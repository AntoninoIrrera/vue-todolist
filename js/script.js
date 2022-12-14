

const { createApp } = Vue


createApp({
    data() {
        return {
            userInput: "",
            tasks:[
                {
                    text: "Quarterly Newsletter",
                    done: true
                },
                {
                    text: "Rectruiting blog post",
                    done: true
                },
                {
                    text: "Mobile app launch",
                    done: true
                },
                {
                    text: "Interview with John H.",
                    done: false
                },
                {
                    text: "Summit update to mobile storefronts",
                    done: true
                },
                {
                    text: "Schedule meeting with Alex",
                    done: false
                },
                {
                    text: "Homepage refresh",
                    done: true
                },
                {
                    text: "Onboard new Sales team members",
                    done: true
                },
                {
                    text: "Review editorial calendar",
                    done: true
                }
            ]
        }
    },
    methods: {
        removeElementFromList(element,indice){


            const indexElemento = this.tasks[indice].text.indexOf(element);

            if(indexElemento > -1){
                this.tasks.splice(indexElemento,1);
            }

        },
        addNewElementAtList(element){

        
                
            this.tasks.push(
                {
                    text: element,
                    done: false
                }
            );
                
            

        }




    }
}).mount("#app")

