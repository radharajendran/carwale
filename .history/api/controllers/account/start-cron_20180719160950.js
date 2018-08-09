module.exports = {


    friendlyName: 'View login1',
  
  
    description: 'Display "Login" page1.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/entrance/login1',
      },
  
      redirect: {
        description: 'The requesting user is already logged in.',
        responseType: 'redirect1'
      }
  
    },
  
  
    fn: async function (inputs, exits) {
      console.log('asdasdasdasd')
  
    }
  
  
  };
  