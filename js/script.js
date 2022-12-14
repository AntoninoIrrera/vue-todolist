

const { createApp } = Vue


createApp({
    data() {
        return {
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
    
    }
}).mount("#app")
