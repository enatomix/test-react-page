import React from 'react';
import PropTypes from 'prop-types';

class SomeComponent extends React.Component{

}

SomeComponent.propTypes={
    someString:PropTypes.string,
    someNumber:PropTypes.number,
    someBool:PropTypes.bool,
    someArray:PropTypes.array,
    someObject:PropTypes.object,
    someFunc:PropTypes.func,
    someSymbol:PropTypes.symbol,
}


const Hello=(props)=>{
    return <div>こんにちは、{props.name}さん</div>
}

ReactDOM.render(
    <div>
        <Hello name="坂本龍馬" />
        <Hello name="西郷隆盛" />
        <Hello name="勝海舟" />
    </div>,
    document.getElementById('root')
)