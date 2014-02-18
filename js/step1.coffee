AppViewModel = ->
  @firstName = ko.observable("Bert")
  @lastName = ko.observable("Bertington")
  @fullName = ko.computed(->
    @firstName() + " " + @lastName()
  , this)
  @capitalizeLastName = ->
    currentVal = @lastName()
    @lastName currentVal.toUpperCase()
    return

  return

# Activates knockout.js
ko.applyBindings new AppViewModel()