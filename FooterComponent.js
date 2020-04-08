import React, { Component } from 'react'

export class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-6">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" ><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" ><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google"><i className="fa fa-youtube" /></a>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <a role="button" className="btn btn-link" ><i className="fa fa-phone" /> 0-123-254-7890</a>
                            <a role="button" className="btn btn-link" ><i className="fa fa-envelope-o" /> PurrfectMatch@gmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;
