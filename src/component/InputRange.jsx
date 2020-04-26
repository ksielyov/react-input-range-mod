import React from 'react';
import styled from 'styled-components';

import Class from './InputRange.module.css';

class InputRange extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inpVal: this.props.value,
            defaultCircle: `
                height: 12px;
                width: 12px;
                border-radius: 25px;
                background: rgb(26, 115, 232);
                cursor: pointer;
                -webkit-appearance: none;
                margin-top: -7px;
            `,
            defaultActiveColor: 'rgb(26, 115, 232)',
            defaultOpacityColor: '#eee'
        }

        this.ReadyInp = styled.input`
            &::-webkit-slider-thumb {
                ${() => this.props.sliderStyles.trim() === '' ? this.state.defaultCircle : this.props.sliderStyles }
            }

            &::-ms-thumb {
                ${() => this.props.sliderStyles}
            }

            &:focus::-ms-fill-lower {
                ${() => this.props.sliderStyles}
            }
            
            &:focus::-ms-fill-upper {
                ${() => this.props.sliderStyles}
            }

            ${() => this.props.gibridStyles }
        `;
    }

    handleChange = e => {
        this.props.onChange(e);

        this.setState({ inpVal: e.target.value });
    }

    componentDidMount = () => {
        if(this.props.activeColor.trim() !== '')
            this.setState({ defaultActiveColor : this.props.activeColor });
        
        if(this.props.opacityColor.trim() !== '')
            this.setState({ defaultOpacityColor : this.props.opacityColor });
    
        // activeColor: this.props.activeColor.trim() === '' ? this.defaultActiveColor : this.props.activeColor
    }

    render() {
        return (

            <this.ReadyInp
                // dangerouslySetInnerHTML={}
                className={Class.rangeSlide}
                type="range"
                min={this.props.minLength}
                max={this.props.maxLength}
                value={this.state.inpVal}
                onChange={e => this.handleChange(e)}
                style={{ background: 'linear-gradient(90deg, ' + this.state.defaultActiveColor  + ' ' + this.state.inpVal / this.props.delemiter + '%,  ' + this.state.defaultOpacityColor + ' ' + this.state.inpVal / this.props.delemiter + '%)' } /*this.props.gibridStyles*/}
            />

        );
    }
}

export default InputRange;