/**
 * Async
 * stop then, use await
 */

//old version
let tokenToRegister;
function registerDevice(){ 
    // implements here
};
messaging.requestPermission().then(function(message) {
    return message.getToken();
  })
  .then((token)=> {
    tokenToRegister = token;
    registerDevice();
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });


//new version
  let tokenToRegister;
    function registerDevice(){ 
    // implements here
    };
  (async function(){
      try{
        let message = await messaging.requestPermission();
        tokenToRegister = await message.getToken();
        registerDevice();
      }catch(err){
        console.log('Unable to get permission to notify.', err);
      }
  })()