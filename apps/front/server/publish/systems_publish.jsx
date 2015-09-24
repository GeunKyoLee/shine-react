/**
 * Created by ProgrammingPearls on 15. 9. 22..
 */

Meteor.publish('systemView', function() {
	console.log('systemView publis');
  return Systems.find({});
});
