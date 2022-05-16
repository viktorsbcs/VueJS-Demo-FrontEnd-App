var User = {
  template: `
    <div class="row mt-5">  
        <div class="col-3"></div>
        <div class="col-6">
                           
            <form @submit="checkForm" name="checkForm">
            <div class="mb-3">

              <p v-if="errors.length">
              <b class="text-danger form-label">Please correct the following error(s):</b>
              <ul>
                <li class="text-danger form-label" v-for="error in errors">{{ error }}</li>
              </ul>
              </p>


              <label for="name" class="form-label">Name</label>
      
              <input
                name="name"
                v-model="name"
                type="text"
                class="form-control"
                id="name"
                ng-required="true"
              />

            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
      
              <input
                name="email"
                v-model="email"
                type="text"
                class="form-control"
                id="email"
                ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/"
                ng-required="true"
              />
      

            </div>
            <div class="mb-3">
              <label for="role" class="form-label">Select user role</label>
      
              <select
                class="form-select"
                aria-label="user-role"
                id="role"
                v-model="role"
                name="role"
                ng-required="true"
              >
                <option value="Subscriber">Subscriber</option>
                <option value="Moderator">Moderator</option>
                <option value="Administrator">Administrator</option>
              </select>

            </div>
      
            <button
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>




        
        </div>
        <div class="col-3"></div>
    </div>
    `,

    data: function() {
      return {
        errors: [],
        name: null,
        email: null,
        role: null
      };
    },
    
    methods: {
      checkForm: function (e) {
        this.errors = [];
  
        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }
        if(!this.role){
          this.errors.push("Role required.")
        }
  
        if (!this.errors.length) {
          return true;
        }
  
        e.preventDefault();
      },


      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },


    }
};
