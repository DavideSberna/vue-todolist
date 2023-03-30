const { createApp } = Vue

  createApp({
    data() {
      return {
        list: [
            {
              name: "pane",
              completed: false,
            },
            {
              name: "carne",
              completed: false,
            },
            {
              name: "frutta",
              completed: false,
            },
            {
              name: "bibite",
              completed: false,
            }
        ],
        inputList: '',
         
        
        
        
        
      }
    },
    
    methods: {
        addInputValue(){
            const newList = {
                name: this.inputList,
                completed: false,
            }
            this.list.push(newList)
            this.inputList = ''
        },
        addDoneItems(index){
            if(!this.$refs.lista[index].classList.contains('bg-success-subtle')){
                this.list[index].completed = true;
            } else{
                this.list[index].completed = false;
            }
             
             
        },
        deleteItems(index){
            this.list.splice(index, 1);
        },


         
        
    }
  }).mount('#app')