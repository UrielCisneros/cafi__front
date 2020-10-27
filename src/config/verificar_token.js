import jwt_decode from 'jwt-decode';
function verificarToken(props) {
    const token = localStorage.getItem('token');
	var decoded = Jwt(token);

	function Jwt(token) {
		try {
			return jwt_decode(token);
		} catch (e) {
			return null;
		}
    }

	if (token === '' || token === null || decoded['rol'] !== 'Admin') {
		props.history.push('/');
	}
}
export default verificarToken;