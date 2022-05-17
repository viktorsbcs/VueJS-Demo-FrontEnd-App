var AllUsers = {
    template: `
        <div class="row mt-5">  

            <div class="col-3"></div>
            <div class="col-6">
            <div class="row pull-right">
                <button
                type="button"
                class="btn btn-primary d-grid gap-2 col-6 mx-auto"
                @click="restCall"
                >
                Make Rest Call Data
                </button>
            </div>
            </div>
            <div class="col-3"></div>
        </div>
        
        {{info}}
        
        <div class="row mt-5">  <!--User list-->
            <div class="col-12">
            <div ng-repeat="page_response in response_list">
                <div class="card-group">
                <div class="card" ng-repeat="user in page_response.data">
                    <img
                    src="{{user.avatar}}"
                    class="card-img-top"
                    alt="{{user.first_name}}"
                    style="width: 100%; height: 20vh; object-fit: cover"
                    />
                    <div class="card-body">
                    <h5 class="card-title">{{user.first_name}} {{user.last_name}}</h5>
                    <p class="card-text" style="font-size: smaller">{{user.email}}</p>
                    </div>
                </div>
                </div>
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
          users: [],
          info: null
        };
    },
    methods: {
        restCall: function () {
            console.log("restCall() triggered");

            axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response))

        },
    }
}