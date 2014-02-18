# Class to represent a row in the seat reservations grid
SeatReservation = (name, initialMeal) ->
  self = this
  self.name = name
  self.meal = ko.observable(initialMeal)
  self.formattedPrice = ko.computed(->
    price = self.meal().price
    (if price then "$" + price.toFixed(2) else "None")
  )
  return

# Overall viewmodel for this screen, along with initial state
ReservationsViewModel = ->
  self = this
  
  # Non-editable catalog data - would come from the server
  self.availableMeals = [
    {
      mealName: "Standard (sandwich)"
      price: 0
    }
    {
      mealName: "Premium (lobster)"
      price: 34.95
    }
    {
      mealName: "Ultimate (whole zebra)"
      price: 290
    }
  ]
  
  # Editable data
  self.seats = ko.observableArray([
    new SeatReservation("Steve", self.availableMeals[0])
    new SeatReservation("Bert", self.availableMeals[0])
  ])
  
  # Operations
  self.addSeat = ->
    self.seats.push new SeatReservation("", self.availableMeals[0])
    self.removeSeat = (seat) ->
      self.seats.remove seat
      return

    return

  self.totalSurcharge = ko.computed(->
    total = 0
    i = 0

    while i < self.seats().length
      total += self.seats()[i].meal().price
      i++
    total
  )
  return
ko.applyBindings new ReservationsViewModel()