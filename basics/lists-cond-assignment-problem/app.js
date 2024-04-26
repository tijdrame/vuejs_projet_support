const app = Vue.createApp({
    data() {
        return{
            enteredTask: '',
            tasks: [],
            showList: true,
            label:'Hide'
        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        maskList() {
            this.showList = !this.showList;
            if(!this.showList) this.label = 'Show';
        }
    }
});
app.mount("#assignment");