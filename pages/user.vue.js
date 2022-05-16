var User = {
  template: `
    <div class="row mt-5">  
        <div class="col-3"></div>
        <div class="col-6">
            /user loaded
          
        
        </div>
        <div class="col-3"></div>
    </div>
    `,



    methods: {
        validateAndSubmit() {
            // .. validate before sending the request off to server.
            this.validationErrors = [];
            if (this.validate()) {
              this.login();
            }
          },
          validate() {
            const errors = [];
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!pattern.test(this.email)) errors.push("Invalid email.");
      
            if (errors) this.validationErrors = errors;
            else this.validationErrors = [];
      
            return !this.validationErrors.length;
          }
    }
};
