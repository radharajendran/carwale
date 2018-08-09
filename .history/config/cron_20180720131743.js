module.exports.cron = {
      discoverCron: {
        schedule: '* * * * * *',
        onTick: function() {
          console.log('cartridge cron ticked');
          sails.hooks.cron.jobs.discoverCron.stop()
          
        }
      }
};
