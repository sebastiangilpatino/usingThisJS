function askPassword(ok, fail){
    let password = prompt("Password?",'');
    if (password=='rockstar'){
        ok();
    }else{
        fail();
    }
}

let user = {
    name: 'Jhon',
    
    loginOk(){
        alert(`${this.name} looged in`);
    },

    loginFail(){
        alert(`${this.name} failed to log in`);
    },
};

askPassword(()=>{user.loginOk.call(user)},() =>{user.loginFail.call(user)} );