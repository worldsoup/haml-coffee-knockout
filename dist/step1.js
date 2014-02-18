(function() {
  var AppViewModel;

  AppViewModel = function() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.fullName = ko.computed(function() {
      return this.firstName() + " " + this.lastName();
    }, this);
    this.capitalizeLastName = function() {
      var currentVal;
      currentVal = this.lastName();
      this.lastName(currentVal.toUpperCase());
    };
  };

  ko.applyBindings(new AppViewModel());

}).call(this);
