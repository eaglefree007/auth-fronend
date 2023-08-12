// export function authVerified(){
//   // return {token : localStorage.getItem("User-token") || false }
//   let token = localStorage.getItem("User-token")
//   if (token) {
//     console.log(JSON.parse(token));
//     return {token : JSON.parse(token).token, role: JSON.parse(token).role}
//   } else {
//     return false;
//   }
// }
export function authVerified() {
  let storedToken = localStorage.getItem("User-token") || false

  if (storedToken) {
    const { token, role } = JSON.parse(storedToken);
    // console.log(token, role); // Optionally log the token and role for debugging
    return { token, role };
  } else {
    return false;
  }
}
// export function role(){
//   const Role = localStorage.getItem("role")
//   return Role || false
// }

// module.exports = {
//   authVerified, role
// }