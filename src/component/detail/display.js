'use strict';

export default {
    name: 'display',
    functional: true,
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    render(h, ctx){
        return (<table>
            <tr>
                <th>Name</th>
                <th>Student Number</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            <tr>
                <td>{ctx.props.user.username}</td>
                <td>{ctx.props.user.sid}</td>
                <td>{ctx.props.user.email}</td>
                <td>{ctx.props.user.phone}</td>
            </tr>
        </table>);
    }
}