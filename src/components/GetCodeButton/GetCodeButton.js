import React, {Component} from 'react';
import Icon from 'react-fontawesome';
import { Button } from 'reactstrap';


class GetCodeButton extends Component {
    render(){

        let url_code = 'https://github.com/roggeo/webpage';

        return(
            <p className="text-center">
                <Button color="success" onClick={() => window.location.href=url_code}>
                   <Icon name='code'/> Get code of this
                </Button>
            </p>
        );
    }
}

export default GetCodeButton;