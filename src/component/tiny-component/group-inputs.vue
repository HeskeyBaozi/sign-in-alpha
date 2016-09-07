<script>
    export default{
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
    }
</script>

<style>
    .group-inputs {
        border: 1px solid #cccccc;
        border-radius: 2px;
    }

    .input-wrapper {
        position: relative;
        margin: 0;
        overflow: hidden;
    }

    .input-wrapper + .input-wrapper {
        border-top: 1px solid #e8e8e8;
    }

    .input-wrapper input {
        border: 0;
        border-radius: 0;
        box-shadow: none;
        background-color: #ffffff;
        padding: 1em .8em;
        width: 100%;
        box-sizing: border-box;
    }

    .input-wrapper input:focus {
        box-shadow: 0 0 5px #c5d5ee inset;
    }

    .input-wrapper input:active {
        background-color: #ffffff;
    }
</style>
