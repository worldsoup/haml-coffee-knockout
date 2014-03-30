(function() {
  var ReservationsViewModel, SeatReservation;

  SeatReservation = function(name, initialMeal) {
    var self;
    self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
    self.formattedPrice = ko.computed(function() {
      var price;
      price = self.meal().price;
      if (price) {
        return "$" + price.toFixed(2);
      } else {
        return "None";
      }
    });
  };

  ReservationsViewModel = function() {
    var self;
    self = this;
    self.availableMeals = [
      {
        mealName: "Standard (sandwich)",
        price: 0
      }, {
        mealName: "Premium (lobster)",
        price: 34.95
      }, {
        mealName: "Ultimate (whole zebra)",
        price: 290
      }
    ];
    self.seats = ko.observableArray([new SeatReservation("Steve", self.availableMeals[0]), new SeatReservation("Bert", self.availableMeals[0])]);
    self.addSeat = function() {
      self.seats.push(new SeatReservation("", self.availableMeals[0]));
    };
    self.removeSeat = function(seat) {
      self.seats.remove(seat);
    };
  };

  ko.applyBindings(new ReservationsViewModel());

}).call(this);
