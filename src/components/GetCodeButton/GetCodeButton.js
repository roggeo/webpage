import React, {Component} from 'react';
import Icon from 'react-fontawesome';
import { Button } from 'reactstrap';

class GetCodeButton extends Component {
    render(){
        return(
            <p className="text-center">
                <Button color="success">
                    <Icon name='code'/> Get code of this
                </Button>
            </p>
        );
    }
}

export default GetCodeButton;