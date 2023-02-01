function callGoogleUsers(userId,onSuccess,onFailure) {
 
 return  onSuccess(userId);
}
function Success(userId){
    return `The user information for ${userId} has been retrieved`;
}
function Failure(){
    return 'you failed';
}
let answer = callGoogleUsers ('Benjamin',Success,Failure);
console.log(answer);



