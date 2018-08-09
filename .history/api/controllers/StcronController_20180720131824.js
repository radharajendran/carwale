module.exports = {   
  
  
    start: function (req, res) {
  
      console.log(sails.hooks.cron)
      sails.hooks.cron.jobs.discoverCron.start()
      res.send('sssssssssssssssssssss');
    },

    stop: function(req, res){
      console.log('stopstopstopstopstop')
      res.send('stopstopstopstopstop')
    }
  
  
  };
  