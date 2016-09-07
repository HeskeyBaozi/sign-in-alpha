'use strict';

import './group-inputs.css';

/**
 * group-inputs is a groups of <input/> in the form
 */
export default {
    functional: true,
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    render(h, ctx){
        let jsxList = ctx.props.list.map(singleInfo => {
            return (<div class="input-wrapper">
                <input type={singleInfo.type} name={singleInfo.name} placeholder={singleInfo.placeholder}/>
            </div>);
        });
        return (<div class="group-inputs">
            {jsxList}
        </div>);
    }
};
