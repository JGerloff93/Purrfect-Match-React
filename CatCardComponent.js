import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class CatCardComponent extends Component {
    constructor(props) { 
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap">
                        {this.props.cats.image}
                    </CardImg>
                    <CardBody>
                        <CardTitle>{this.props.cats.name}</CardTitle>
                        <CardText>
                            {this.props.cats.sex}, <br />
                            {this.props.cats.Age}, <br />
                            {this.props.cats.Temperment}, <br />
                        </CardText>
                        <Button>Apply today!</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CatCardComponent;
