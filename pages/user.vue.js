var User = {
  template: `
    <div class="row mt-5">  
        <div class="col-3"></div>
        <div class="col-6">
                           
            <form @submit.prevent="checkForm"   name="checkForm">
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
                v-model="user.name"
                type="text"
                class="form-control"
                id="name"
              />

            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
      
              <input
                name="email"
                v-model="user.email"
                type="text"
                class="form-control"
                id="email"
              />
      

            </div>
            <div class="mb-3">
              <label for="role" class="form-label">Select user role</label>
      
              <select
                class="form-select"
                aria-label="user-role"
                id="role"
                v-model="user.role"
                name="role"
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




        {{users}}

        </div>
        <div class="col-3"></div>


        <div class="row mt-5">
  

          <div class="col-3"></div>
          <div class="col-6">
          
            <table class="table table-bordered">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in users">
              <td>{{user.userId}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.role}}</td>
            </tr>
          </table>



          
          
          </div>
          <div class="col-3"></div>

        </div>





    </div>
    `,

  data: function () {
    return {
      errors: [],
      user: {
        userId: null,
        name: null,
        email: null,
        role: null,
      },
      userCounter : 0,
      users: [],
    };
  },

  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.user.name) {
        this.errors.push("Name required.");
      }
      if (!this.user.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.user.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.user.role) {
        this.errors.push("Role required.");
      }

      if (this.errors.length > 0) {
        console.log("Validation error");
        return true;
      }

      if (!this.errors == 0) {
        console.log(this.user);
        console.log("validation success");
        this.userCounter += 1;
        this.user.userId = this.userCounter;
        this.users.push(this.user);

        this.user = {};
      }

      console.log("function end reached");
      // e.preventDefault();
    },

    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
