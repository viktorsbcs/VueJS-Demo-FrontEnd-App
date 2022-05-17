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




        </div>
        <div class="col-3"></div>


        <div class="row mt-5">
  

          <div class="col-3"></div>
          <div class="col-6">
          





          <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="nav-all"
              aria-selected="true"
            >
              All
            </button>
    
            <button
              class="nav-link"
              id="nav-administrator-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-administrator"
              type="button"
              role="tab"
              aria-controls="nav-administrator"
              aria-selected="false"
            >
              Administrators
            </button>
    
            <button
              class="nav-link"
              id="nav-moderator-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-moderator"
              type="button"
              role="tab"
              aria-controls="nav-moderator"
              aria-selected="false"
            >
              Moderators
            </button>
    
            <button
              class="nav-link"
              id="nav-subscriber-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-subscriber"
              type="button"
              role="tab"
              aria-controls="nav-subscriber"
              aria-selected="false"
            >
              Subscribers
            </button>
          </div>
        </nav>

              <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-all"
                role="tabpanel"
                aria-labelledby="nav-all-tab"
              >
                <table class="table table-bordered">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                  <tr v-for="user in filterNav(1)">
                    <td>{{user.userId}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                  </tr>
                </table>
              </div>
        
              <div
                class="tab-pane fade"
                id="nav-administrator"
                role="tabpanel"
                aria-labelledby="nav-administrator-tab"
              >
                <table class="table table-bordered">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                  <tr v-for="user in filterNav(2)">
                    <td>{{user.userId}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                  </tr>
                </table>
              </div>
        
              <div
                class="tab-pane fade"
                id="nav-moderator"
                role="tabpanel"
                aria-labelledby="nav-moderator-tab"
              >
                <table class="table table-bordered">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                  <tr v-for="user in filterNav(3)">
                    <td>{{user.userId}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                  </tr>
                </table>
              </div>
        
              <div
                class="tab-pane fade"
                id="nav-subscriber"
                role="tabpanel"
                aria-labelledby="nav-subscriber-tab"
              >
                <table class="table table-bordered">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                  <tr v-for="user in filterNav(4)">
                    <td>{{user.userId}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                  </tr>
                </table>
              </div>
            </div>
         



          



          
          </div>
          <div class="col-3">

            <button
            type="button"
            class="btn btn-primary"
            @click="populateWithDummyData"
            >Fill with dummy data</button>

          </div>

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
      userCounter: 0,
      fillText: "",
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
        console.log("Validation success");
        this.userCounter += 1;
        this.user.userId = this.userCounter;
        this.users.push(this.user);

        this.user = {};
      }

      console.log("Function end reached");
      // e.preventDefault();
    },

    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    filterNav: function (setTab) {
      if (setTab === 1) return this.users;
      if (setTab === 2)
        return this.users.filter((user) => user.role === "Administrator");
      if (setTab === 3)
        return this.users.filter((user) => user.role === "Moderator");
      if (setTab === 4)
        return this.users.filter((user) => user.role === "Subscriber");

      console.log(
        "filterNav() triggered, setTab=" +
          setTab +
          ", fillText=" +
          this.filtText
      );
    },

    populateWithDummyData: function () {
      this.users = [
        {
          name: "Sam Anthony",
          email: "sam@gmail.com",
          role: "Administrator",
          userId: 1,
        },
        {
          name: "Bridget Jones",
          email: "bridget@inbox.com",
          role: "Moderator",
          userId: 2,
        },
        {
          name: "Karl Thomson",
          email: "karl@yahoo.com",
          role: "Moderator",
          userId: 3,
        },
        {
          name: "Justine Adamson",
          email: "justine@gmail.com",
          role: "Subscriber",
          userId: 4,
        },
        {
          name: "Aleksandr Nowitzki",
          email: "aleksandr@gmail.com",
          role: "Subscriber",
          userId: 5,
        },
        {
          name: "William Manor",
          email: "william@gmail.com",
          role: "Administrator",
          userId: 6,
        },
        {
          name: "George Bean",
          email: "george@gmail.com",
          role: "Moderator",
          userId: 7,
        },
        {
          name: "Jack Depp",
          email: "jack@outlook.com",
          role: "Subscriber",
          userId: 8,
        },
        {
          name: "Branda Simpson",
          email: "branda@abc.com",
          role: "Subscriber",
          userId: 9,
        },
        {
          name: "Bill Russel",
          email: "bill@info.com",
          role: "Subscriber",
          userId: 10,
        },
      ];
      this.userCounter = 10;
    },
  },
};
