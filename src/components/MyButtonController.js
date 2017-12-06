import React from'react';
import ListStore from '../flux/stores/ListStore.js';
import ButtonActions from '../flux/actions/ButtonActions.js';
import {MyButton} from './MyButton.js';


class MyButtonController extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items:ListStore.getAll()
        };
    }

    componentDidMount() {
        ListStore.addChangeListener(this._onChange.bind(this));
    };

    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange.bind(this));
    };

    _onChange () {
        console.log('_onChange')
        console.log(ListStore.getAll())
        this.setState({
            items: ListStore.getAll()
        });
    };

    createNewItem (event) {
        console.log('createNewItem');
        //用法1 推荐
        ButtonActions.addNewItem('new item');
        
        // //用法2
        // ListStore.addNewItemHandler('new item');
        // ListStore.emitChange();
        // ListStore.addChangeListener(this._onChange.bind(this));

        // //错误用法
        // ListStore.addNewItemHandler('new item');
    };

    render() {
        return <MyButton
            items={this.state.items}
            onClick={this.createNewItem.bind(this)}
        />;
    }

}
export {MyButtonController}
