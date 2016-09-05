<style scoped>
    body {
        background-color: #ff0000;
    }
</style>

<script type="text/jsx">
    export default{
        //functional: true,
        name: 'my-header',
        props: {
            level: {
                required: true,
                type: Number
            }
        },
        render(h){
            return <h1>nihao, {this.level}</h1>;
        }
    }
</script>
