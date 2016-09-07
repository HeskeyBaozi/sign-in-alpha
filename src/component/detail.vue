<style>

</style>
<script>
    export default{
        name: 'Detail',
        props: {
            name: {
                type: String,
                required: true
            },
            studentNumber: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            }
        },
        render(h){
            return (<table class={{tabel: true}}>
                <tr>
                    <th>Name</th>
                    <th>Student Number</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>{this.name}</td>
                    <td>{this.studentNumber}</td>
                    <td>{this.email}</td>
                    <td>{this.phone}</td>
                </tr>
            </table>);
        }
    }
</script>
