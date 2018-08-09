module.exports.cron = {
      discoverCron: {
        schedule: '* * * * * *',
        onTick: function() {
          console.log('cartridge cron ticked');          
        }
      }
};
