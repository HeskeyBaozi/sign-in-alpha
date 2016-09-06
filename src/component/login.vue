<script type="text/jsx">
    export default {
        name: 'login',
        methods: {
            async fetch(){
                console.log('on Click');
                let text = await fetch('/index.html').then(res => res.text());
                console.log(text);
            },
            async login(){
                let res = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: 'Hubot',
                        password: 'hubot',
                    })
                }).then(res => res.json());

                console.log(res);
            }
        },
        render(h){
            return (<div>
                login
                <p on-click={this.login}>click here</p>
            </div>);
        }
    };
</script>