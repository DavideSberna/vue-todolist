const { createApp } = Vue

  createApp({
    data() {
      return {
        list: [
            {
              name: "pane",
              completed: false,
              delete: false,
            },
            {
              name: "carne",
              completed: false,
              delete: false,
            },
            {
              name: "frutta",
              completed: false,
              delete: false,
            },
            {
              name: "bibite",
              completed: false,
              delete: false,
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
                this.list[index].delete = false
            } else{
                this.list[index].completed = false;
            }
             
             
        },
        deleteItems(index){
            // this.list.splice(index, 1);
             
            if(!this.$refs.listElement[index].classList.contains('text-decoration-line-through')){
                this.$refs.lista[index].classList.add("bg-danger-subtle")
                this.list[index].delete = true;
                this.list[index].completed = false;
            } else{
                this.$refs.lista[index].classList.remove("bg-danger-subtle")
                this.list[index].delete = false;
            }
            
        },


         
        
    }
  }).mount('#app')