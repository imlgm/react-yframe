import React, {Component} from 'react';
import {render,unmountComponentAtNode} from 'react-dom';


export default class Yframe extends Component {
    
    getFrame = (yframe) => this.yframe = yframe; 

    componentDidMount(){
        this.setFrameContents();
    }

    setFrameContents = () => {
        
        let frameContentDoc = this.yframe.contentDocument;
        if(frameContentDoc.readyState === 'complete'){
            let elsToRender = this.getRenderEls();
            render(elsToRender, frameContentDoc.body);
            if(this.props.transferParentResize)
                setTimeout(this.manaulTriggerWindowsResize,0);
        } else {
            setTimeout(this.setFrameContents,0);
        }
    }

    getRenderEls(){
        let {copyStyle} = this.props;
        if(!copyStyle) return this.props.children;
        let links = window.document.getElementsByTagName('link');
        return <div> 
        {
            Array.prototype.map.call(links, (link,index) => {
                return <link href={link.href} key={index} rel='stylesheet'/>
            })
        }
        {this.props.children}
        </div>
    }

    componentDidUpdate(){
        this.setFrameContents();
    }

    //if a componets bind resize event on parent window, when this componet render to yframe, the resize event will not captured, so let it fired manually
    manaulTriggerWindowsResize(){
        let evt = window.document.createEvent('HTMLEvents');
        evt.initEvent('resize',true,true);
        window.dispatchEvent(evt);
    }

    componentWillUnmount(){
        unmountComponentAtNode(this.yframe.contentDocument.body);
    }

    render(){
        let {className} = this.props;
        return <iframe ref={this.getFrame} {...this.props} />;
    }

}