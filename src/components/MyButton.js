import React from 'react';

class MyButton extends React.Component{
    constructor(props) {
        super(props);
        console.log('MyButton.constructor');
        console.log(this.props.items);
    }



    render(){
        return (
            <div>

                <ul>
                    {
                        this.props.items.map(function(listItem,i){  
                            return <li key={i}>{listItem}</li>;
                        })  
                    }
                </ul>

                <button onClick={this.props.onClick}>New Item</button>
            </div>
        )
    }
}
export {MyButton};
