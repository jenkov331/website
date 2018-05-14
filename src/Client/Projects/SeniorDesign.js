import React, { Component } from 'react';
import './Projects.css';

class SeniorDesign extends Component {

    render() {
        return (
            <div>
                <h3> Senior Design </h3>
                <br />
                <PPT />
                <Report />
            </div>
        );
    }
}
const PPT = () => (
    <iframe title="SD-ppt" src='https://onedrive.live.com/embed?cid=A817D68F18D38AEA&resid=A817D68F18D38AEA%21971&authkey=AL8fqfgbwTfjdMY&em=2&wdAr=1.7763888888888888' width='610px' height='367px' frameborder='0'>This is an embedded <a target='_blank' rel="noopener noreferrer" href='https://office.com'>Microsoft Office</a> presentation, powered by <a target='_blank' rel="noopener noreferrer" href='https://office.com/webapps'>Office Online</a>.</iframe>
);

const Report = () => (
    <iframe title="SD-doc" src='https://onedrive.live.com/embed?cid=A817D68F18D38AEA&resid=A817D68F18D38AEA%21974&authkey=AOiyG7io1RNayjE&em=2&wdStartOn=1' width='610px' height='367px' frameborder='0'>This is an embedded <a target='_blank' rel="noopener noreferrer" href='https://office.com'>Microsoft Office</a> document, powered by <a target='_blank' rel="noopener noreferrer" href='https://office.com/webapps'>Office Online</a>.</iframe>
)

export default SeniorDesign;