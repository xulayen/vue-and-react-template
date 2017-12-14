import React from 'react';

class MyButton extends React.Component{
    constructor(props) {
        super(props);
        console.log('MyButton.constructor');
        console.log(this.props.items);
        var _self=this;
        $.ajax({
            url: "/gettoken",
            method: "post",
            type: "json",
            success: function (token) {
              console.log(token)

              _self.state={
                 token:token 
              }
            }
            });

    }

  submit(){


    var _self=this;
                                $.ajax({
                                    url: "/index",
                                    method: "post",
                                    type: "json",
                                    headers: {
                                        'Authorization': _self.state.token,
                                    },
                                    success: function (resp) {
                                        if (resp.code == 200) {
                                            console.log(resp)
                                        }else{
                                            console.log(resp)
                                        }
                                    }
                                })
            }



    


    render(){
        return (
            <div className="btnlogin">

                <ul>
                    {
                        this.props.items.map(function(listItem,i){  
                            return <li key={i}>{listItem}</li>;
                        })  
                    }
                </ul>

                <button onClick={this.props.onClick}>New Item</button>



                                    <form>
                        puizzzz
                        <input type="button" value="提  交" onClick={this.submit.bind(this)}/>
                    </form>

            </div>
        )
    }
}
export {MyButton};
