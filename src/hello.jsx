import React, { PureComponent } from 'react';

class Hello extends PureComponent {
    render() {
        return (
            <div>
                <span> pure component </span>
                {
                    this.props.data.map((item, key) => { 
                        return <span key={key}>{item}</span>
                    })
                }
            </div>
        )
    }
}

export default Hello