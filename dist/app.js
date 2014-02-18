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
        mealName: "Standard (sandwhich)",
        price: 34.95
      }, {
        mealName: "Ultimate (whole zebra)",
        price: 290
      }
    ];
    self.seats = ko.observableArray([new SeatReservation("Steve", self.availableMeals[0]), new SeatReservation("Bert", self.availableMeals[0])]);
    self.addSeat = function() {
      self.seats.push(new SeatReservation("", self.availableMeals[0]));
      return self.removeSeat = function(seat) {
        self.seats.remove(seat);
      };
    };
    return;
    return self.totalSurcharge = ko.computed(function() {
      var i, total;
      total = 0;
      i = 0;
      while (1 < self.seats().length) {
        total += self.seats()[i].meal().price();
        i++;
      }
      return total;
    });
  };

  ko.applyBindings(new ReservationsViewModel());

}).call(this);
