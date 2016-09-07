'use strict';

import './launchers.css';

export default {
    functional: true,
    props: {
        btns: {
            type: Array,
            required: true
        }
    },
    render(h, ctx){
        let jsxList = ctx.props.btns.map(el => {
            return (<button class="button" type={el.type} on-click={el.handler}>
                {el.value}
            </button>);
        });

        return (<div class="command">
            {jsxList}
        </div>);
    }
};