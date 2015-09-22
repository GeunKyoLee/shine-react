/**
 * Created by ProgrammingPearls on 15. 9. 22..
 */

Meteor.publish('systemView', function() {
  return Systems.find({});
});
