
var vm = new Vue({
                el: '#app',
                data:{
                	draft: '',
                	new_task:'',

                	tasks:[
	                	{
	                		description:'Aprender vue',
	                		pending: true,
	                		editing:false
	                	},
	                	{
	                		description:'Aprender saas',
	                		pending: true, 
	                		editing:false
	                	},
	                	{
	                		description:'Aprender php',
	                		pending: false,
	                		editing:false
	                	}
	                ]
                },
                methods: {
			        createTask: function () {
			            this.tasks.push({
			                description: this.new_task,
			                pending: true,
			                editing: false
			            });

			            this.new_task = '';
			        },
			        toggleStatus: function (task) {
			            task.pending = !task.pending;
			        },
			        editTask: function (task) {
			            this.tasks.forEach(function (task) {
			                task.editing = false;
			            });

			            this.draft = task.description;

			            task.editing = true;
			        },
			        updateTask: function (task) {
			            task.description = this.draft;

			            task.editing = false;
			        },
			        discardTask: function (task) {
			            task.editing = false;
			        },
			        deleteTask: function (index) {
			            this.tasks.splice(index, 1);
			        },
			        deleteCompleted: function () {
			            this.tasks = this.tasks.filter(function (task) {
			                return task.pending;
			            });
			        }

    			}
            });