var React = require("react");
var axios = require("axios");
// var Dropdown = require('react-simple-dropdown');
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;
var Link = require("react-router").Link;
// Form is the main component. It includes the banner and form element
var Form = React.createClass({

getInitialState: function() {
  return {
    name: '',
    email: '',
    address: '',
    city:'',
    zip: '',
    state: '',
  }
},
 handleSubmit: function(e) {
            
            console.log("submit");           
            axios.post("/api/clients", {
                clientName: this.name.value,
                clientEmail: this.email.value,
                clientAddress: this.address.value,
                clientCity: this.city.value,
                clientZip: this.zip.value,

                // state: this.state.value,
                // userEmail: this.email.value,
                // userPassword: this.password1.value
            }).then(function(response) {            
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        render: function() {
          console.log("check")
            return(
                <div className="container">
         <div className="row">
          
                <div>
                        {this.props.children}

                              <div className="col-xs-12 col-sm-4 register">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="firstName">Name</label>
                                    <input type="text" name="name" placeholder="Full Name" ref={(input) => { this.name = input; }}/>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" placeholder="email" ref={(input) => { this.email = input; }}/>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" placeholder="Address" ref={(input) => { this.address= input; }}/>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" placeholder="City" ref={(input) => { this.city= input; }}/>
                                    <label htmlFor="city">Zip</label>
                                    <input type="text" name="zip" placeholder="Zip Code" ref={(input) => { this.zip= input; }}/>           
                                   <Link to ="jobs"><button className= "btn btn-success">Add New Job</button></Link>
                                </form>
                            </div>
                        </div>
                 </div>
                 </div>
            );
        }
      });
module.exports = Form;