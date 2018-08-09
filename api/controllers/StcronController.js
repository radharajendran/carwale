module.exports = {   
  
  
    start: function (req, res) {  
      sails.hooks.cron.jobs.discoverCron.start()
      res.send('sssssssssssssssssssss');
    },

    stop: function(req, res){
      console.log('stopstopstopstopstop')
      res.send('stopstopstopstopstop')
    }
  
  
  };
  