var React = require("react");
var axios = require("axios");


var Link = require("react-router").Link;
// Form is the main component. It includes the banner and form element
var JobForms = React.createClass({

getInitialState: function() {
  return {
      date: '',
      type: '',
      materials: '',
      bid: '',
      jobOpen: '',
      notes: ''


  }
},


 handleSubmit: function(e) {
            // e.preventDefault();
            console.log("submit");           
            axios.post("/api/jobs", {
                jobDate: this.date.value,
                jobType: this.type.value,
                jobMaterials: this.materials.value,
                jobBid: this.bid.value,
                jobOpen: this.jobOpen.value,
                jobNotes: this.notes.value,


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
          <div className="panel">
            <h2 className="text-center"> HEllo</h2>
            
          </div>
                <div>

                <div>
                    

                              <div className="col-xs-12 col-sm-4 register">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="date">Date</label>
                                    <input type="text" name="date" placeholder="Date" ref={(input) => { this.date = input; }}/>
                                    <label htmlFor="Type">Type</label>
                                    <input type="text" name="type" placeholder="type" ref={(input) => { this.type = input; }}/>
                                    <label htmlFor="materials">Materials</label>
                                    <input type="text" name="address" placeholder="Address" ref={(input) => { this.materials= input; }}/>
                                    <label htmlFor="city">Bid Amount:</label>
                                    <input type="text" name="bid" placeholder="$bid" ref={(input) => { this.bid= input; }}/>
                                    <label htmlFor="jobOpen">jobOpen:</label>
                                    <input type="text" name="bid" placeholder="jobOpen" ref={(input) => { this.jobOpen= input; }}/>
                                    <label htmlFor="jobOpeny">Notes:</label>
                                    <textArea type="text" name="Notes" placeholder="Job Notes" ref={(input) => { this.notes= input; }}/>
                                    
                                    <Link to ="Table"><button className= "btn btn-success">Continue</button></Link>
                                </form>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                 
            );
        }

      });

// Export the component back for use in other files
module.exports = JobForms;